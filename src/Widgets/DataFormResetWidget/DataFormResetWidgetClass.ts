import * as Scrivito from "scrivito";

export const DataFormResetWidget = Scrivito.provideWidgetClass(
  "DataFormResetWidget",
  {
    attributes: {
      title: "string",
      size: ["enum", { values: ["small"] }],
    },
  }
);
