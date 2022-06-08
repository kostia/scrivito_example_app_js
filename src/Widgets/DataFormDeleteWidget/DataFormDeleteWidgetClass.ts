import * as Scrivito from "scrivito";

export const DataFormDeleteWidget = Scrivito.provideWidgetClass(
  "DataFormDeleteWidget",
  {
    attributes: {
      title: "string",
      confirmTitle: "string",
      cancelTitle: "string",
      size: ["enum", { values: ["small"] }],
    },
  }
);
