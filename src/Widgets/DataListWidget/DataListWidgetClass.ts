import * as Scrivito from "scrivito";

export const DataListWidget = Scrivito.provideWidgetClass("DataListWidget", {
  attributes: {
    dataClass: "string",
    dataPage: ["reference", { only: "DataPage" }],
    template: "widgetlist",
  },
});
