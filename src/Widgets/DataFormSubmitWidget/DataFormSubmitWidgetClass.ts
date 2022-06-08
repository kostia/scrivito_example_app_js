import * as Scrivito from "scrivito";

export const DataFormSubmitWidget = Scrivito.provideWidgetClass(
  "DataFormSubmitWidget",
  {
    attributes: {
      title: "string",
      size: ["enum", { values: ["small"] }],
    },
  }
);
