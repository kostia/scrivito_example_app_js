import * as Scrivito from "scrivito";

export const DataFormSubmitWidget = Scrivito.provideWidgetClass(
  "DataFormSubmitWidget",
  {
    attributes: {
      submitTitle: "string",
      hasReset: "boolean",
      resetTitle: "string",
      size: ["enum", { values: ["small"] }],
    },
  }
);
