import * as Scrivito from "scrivito";

export const TextWidget = Scrivito.provideWidgetClass("TextWidget", {
  attributes: {
    myDataLocator: "dataLocator",
    text: "html",
    alignment: ["enum", { values: ["left", "center", "right"] }],
  },
  extractTextAttributes: ["text"],
});
