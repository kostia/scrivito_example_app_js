import * as Scrivito from "scrivito";

const baseUrls = {
  default: "http://localhost:8080/default",

  berlin: "http://localhost:8080/berlin",
  hamburg: "http://localhost:8080/hamburg",
  munich: "http://localhost:8080/munich",
  cologne: "http://localhost:8080/cologne",
  frankfurt: "http://localhost:8080/frankfurt",
  stuttgart: "http://localhost:8080/stuttgart",
};

const config = {
  tenant: process.env.SCRIVITO_TENANT,
  unstable: {
    assetUrlBase: "http://localhost:8091",
    getSiteIdForObj: () => "intranet",
    trustedUiOrigins: ["http://localhost:8090", "http://127.0.0.1:8090"],
  },
  baseUrlForSite: (siteId) => baseUrls[siteId],
  siteForUrl: (url) =>
    Object.keys(baseUrls)
      .map((siteId) =>
        url.startsWith(baseUrls[siteId])
          ? { siteId, baseUrl: baseUrls[siteId] }
          : undefined
      )
      .filter((result) => result)[0],
};

Scrivito.configure({
  ...config,

  unstable: {
    getSiteIdForObj: () => "intranet",
    assetUrlBase: "http://localhost:8091",
    trustedUiOrigins: [
      "https://scrivito-ui-dev.netlify.com",
      "http://localhost:8090",
      "http://127.0.0.1:8090",
    ],
  },

  baseUrlForSite: (siteId) => baseUrls[siteId],

  siteForUrl: (url) =>
    Object.keys(baseUrls)
      .map((siteId) =>
        url.startsWith(baseUrls[siteId])
          ? { siteId, baseUrl: baseUrls[siteId] }
          : undefined
      )
      .filter((result) => result)[0],
});
