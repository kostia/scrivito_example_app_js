import * as Scrivito from "scrivito";

export const ConditionalWidget = Scrivito.provideWidgetClass(
  "ConditionalWidget",
  {
    attributes: {
      condition: "datalocator",
      content: "widgetlist",
    },
  }
);
