import * as Scrivito from "scrivito";

export const DataPage = Scrivito.provideObjClass("DataPage", {
  attributes: {
    dataClass: "string",
    title: "string",
    template: "widgetlist",
  },
});
