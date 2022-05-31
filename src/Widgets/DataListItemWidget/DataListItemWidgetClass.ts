import * as Scrivito from "scrivito";

export const GROUP_CLASS_NAMES = ["grow", "shrink"];

export const DataListItemWidget = Scrivito.provideWidgetClass(
  "DataListItemWidget",
  {
    attributes: {
      numberOfGroups: "integer",

      groupTemplate1: "widgetlist",
      groupTemplate2: "widgetlist",
      groupTemplate3: "widgetlist",
      groupTemplate4: "widgetlist",
      groupTemplate5: "widgetlist",

      groupClassName1: ["enum", { values: GROUP_CLASS_NAMES }],
      groupClassName2: ["enum", { values: GROUP_CLASS_NAMES }],
      groupClassName3: ["enum", { values: GROUP_CLASS_NAMES }],
      groupClassName4: ["enum", { values: GROUP_CLASS_NAMES }],
      groupClassName5: ["enum", { values: GROUP_CLASS_NAMES }],
    },
  }
);
