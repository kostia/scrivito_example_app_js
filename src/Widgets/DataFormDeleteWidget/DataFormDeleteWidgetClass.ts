import * as Scrivito from "scrivito";

export const DataFormDeleteWidget = Scrivito.provideWidgetClass(
  "DataFormDeleteWidget",
  {
    attributes: {
      title: "string",
      dangerous: "boolean",
      size: ["enum", { values: ["small"] }],
    },
  }
);
