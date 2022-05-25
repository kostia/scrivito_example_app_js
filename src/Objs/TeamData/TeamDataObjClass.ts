import * as Scrivito from "scrivito";

export const TeamData = Scrivito.provideObjClass("TeamData", {
  attributes: {
    name: "string",
    description: "string",
  },
});
