const builder = require("content-security-policy-builder");
const dotenv = require("dotenv");
const path = require("path");
const process = require("process");
const webpack = require("webpack");
const lodash = require("lodash");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const Webpackbar = require("webpackbar");
const headersCsp = require("./public/_headersCsp.json");

// load ".env"
dotenv.config();

// Extend headersCsp with custom endpoint URL
const endpoint = process.env.SCRIVITO_ENDPOINT;
if (endpoint) headersCsp["script-src"].push(`https://${endpoint}`);

const BUILD_DIR = "build";

function webpackConfig(env = {}) {
  if (
    !process.env.SCRIVITO_TENANT ||
    process.env.SCRIVITO_TENANT === "your_scrivito_tenant_id"
  ) {
    throw new Error(
      'Environment variable "SCRIVITO_TENANT" is not defined!' +
        ' Check if the ".env" file with a proper SCRIVITO_TENANT is set.' +
        ' See ".env.example" for an example.'
    );
  }

  let scrivitoOrigin = process.env.SCRIVITO_ORIGIN || "";

  // Netlify build environment, see https://docs.netlify.com/configure-builds/environment-variables/
  if (!scrivitoOrigin) {
    if (process.env.CONTEXT === "production") {
      scrivitoOrigin = process.env.URL;
    } else if (process.env.DEPLOY_PRIME_URL) {
      scrivitoOrigin = process.env.DEPLOY_PRIME_URL;
    }
  }

  return {
    mode: "development",
    context: path.join(__dirname, "src"),
    entry: {
      index: "./index.js",
      tracking: "./tracking.js",
      scrivito_extensions: "./scrivito_extensions.js",
    },
    target: "web",
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          include: [path.join(__dirname, "src")],
          use: { loader: "ts-loader" },
        },
        {
          test: /\.s?css$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(jpg|png|eot|svg|ttf|woff|woff2|gif)$/,
          type: "asset/resource",
        },
      ],
    },
    output: {
      publicPath: "/",
      filename: (chunkData) =>
        chunkData.chunk.name === "tracking"
          ? "[name].js"
          : "assets/[name].[contenthash].js",
      chunkFilename: "assets/chunk-[id].[contenthash].js",
      assetModuleFilename: "assets/[name].[contenthash][ext]",
      path: path.join(__dirname, BUILD_DIR),
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: env.production ? "production" : "development",
        SCRIVITO_ENDPOINT: "",
        SCRIVITO_ORIGIN: scrivitoOrigin,
        SCRIVITO_TENANT: "",
      }),
      new Webpackbar(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "../public",
            globOptions: { ignore: ["**/_headersCsp.json", "**/_headers"] },
          },
          {
            from: "../public/_headers",
            transform: (content) => {
              const csp = builder({ directives: headersCsp });
              return content
                .toString()
                .replace(/CSP-DIRECTIVES-PLACEHOLDER/g, csp);
            },
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: env.production
          ? "assets/[name].[contenthash].css"
          : "assets/[name].css",
      }),
      new HtmlWebpackPlugin({
        filename: "catch_all_index.html",
        template: "catch_all_index.html",
        chunks: ["index"],
        inject: false, // needs custom order of script tags
      }),
      new HtmlWebpackPlugin({
        filename: "_scrivito_extensions.html",
        template: "_scrivito_extensions.html",
        chunks: ["scrivito_extensions"],
      }),
      new webpack.SourceMapDevToolPlugin({}),
      new WebpackManifestPlugin({ fileName: "asset-manifest.json" }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      modules: ["node_modules"],
      alias: {
        // ensure that a shared React instance is used
        // this is necessary, if package.json references scrivito via "file:"
        // compare:
        // https://medium.com/@penx/managing-dependencies-in-a-node-package-so-that-they-are-compatible-with-npm-link-61befa5aaca7
        react: path.resolve("./node_modules/react"),
        "react-dom": path.resolve("./node_modules/react-dom"),
      },
      symlinks: true,
      fallback: { crypto: false },
    },
    devServer: {
      port: 8080,
      open: true,
      historyApiFallback: { index: "/catch_all_index.html" },
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Security-Policy": devServerCspHeader(),
      },
      devMiddleware: {
        stats: "minimal",
      },
      client: {
        overlay: false,
      },
    },
  };
}

function devServerCspHeader() {
  const directives = lodash.cloneDeep(headersCsp);

  // allow 'unsafe-eval' for webpack hot code reloading
  directives["script-src"].push("'unsafe-eval'");

  // allow ws: for webpack hot code reloading
  directives["default-src"].push("ws:");

  // Add custom rules for onDevSdk
  directives["default-src"].push("http:");
  directives["script-src"].push("http:");
  directives["style-src"].push("http:");

  return builder({ directives });
}

module.exports = webpackConfig;
