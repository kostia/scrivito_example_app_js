import * as Scrivito from "scrivito";

const config = {
  tenant: process.env.SCRIVITO_TENANT,
  unstable: {
    assetUrlBase: "http://localhost:8091",
    trustedUiOrigins: ["http://localhost:8090", "http://127.0.0.1:8090"],
  },
};

if (process.env.SCRIVITO_ORIGIN) {
  config.origin = process.env.SCRIVITO_ORIGIN;
}

if (process.env.SCRIVITO_ENDPOINT) {
  config.endpoint = process.env.SCRIVITO_ENDPOINT;
}

Scrivito.configure(config);
