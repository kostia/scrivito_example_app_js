import * as Scrivito from "scrivito";

const JUSTIFY_CONTENT_VALUES = ["start", "end"];

export const DataFormButtonsWidget = Scrivito.provideWidgetClass(
  "DataFormButtonsWidget",
  {
    attributes: {
      templateLeft: "widgetlist",
      templateRight: "widgetlist",
      justifyContentLeft: ["enum", { values: JUSTIFY_CONTENT_VALUES }],
      justifyContentRight: ["enum", { values: JUSTIFY_CONTENT_VALUES }],
    },
  }
);
