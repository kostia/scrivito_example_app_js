import * as Scrivito from "scrivito";

export const DataFormSubmitWidget = Scrivito.provideWidgetClass(
  "DataFormSubmitWidget",
  {
    attributes: {
      title: "string",
      dangerous: "boolean",
      size: ["enum", { values: ["small"] }],
    },
  }
);
