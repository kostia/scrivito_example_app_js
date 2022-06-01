import * as Scrivito from "scrivito";

export const DataFormCancelWidget = Scrivito.provideWidgetClass(
  "DataFormCancelWidget",
  {
    attributes: {
      title: "string",
      size: ["enum", { values: ["small"] }],
    },
  }
);
