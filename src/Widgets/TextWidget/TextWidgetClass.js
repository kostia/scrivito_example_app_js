import * as Scrivito from "scrivito";

const TextWidget = Scrivito.provideWidgetClass("TextWidget", {
  attributes: {
    text: "html",
    alignment: ["enum", { values: ["left", "center", "right"] }],
    myWidget: "widget",
  },
  extractTextAttributes: ["text"],
});

export default TextWidget;
