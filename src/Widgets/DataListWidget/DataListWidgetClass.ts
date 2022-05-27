import * as Scrivito from "scrivito";

export const DataListWidget = Scrivito.provideWidgetClass("DataListWidget", {
  attributes: {
    dataClass: "string",
    iconName: "string",
    template: "widgetlist",
  },
});
