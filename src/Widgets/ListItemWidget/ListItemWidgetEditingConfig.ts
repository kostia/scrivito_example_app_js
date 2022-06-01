import * as Scrivito from "scrivito";

import { ListItemWidget } from "./ListItemWidgetClass";

const GROUP_CLASS_NAME_EDITING_CONFIG = {
  title: "Class name",
  description:
    "If set to 'grow' the group will maximaze its width. If set to 'shrink', the group will minimize its width.",
};

Scrivito.provideEditingConfig(ListItemWidget, {
  title: "List Item",
  description: "A list item with up to 5 groups",

  attributes: {
    numberOfGroups: {
      title: "Number of groups",
    },

    groupClassName1: GROUP_CLASS_NAME_EDITING_CONFIG,
    groupClassName2: GROUP_CLASS_NAME_EDITING_CONFIG,
    groupClassName3: GROUP_CLASS_NAME_EDITING_CONFIG,
    groupClassName4: GROUP_CLASS_NAME_EDITING_CONFIG,
    groupClassName5: GROUP_CLASS_NAME_EDITING_CONFIG,
  },

  properties(widget) {
    const properties = ["numberOfGroups"];

    let numberOfGroups = widget.get("numberOfGroups");
    if (numberOfGroups <= 0) numberOfGroups = 0;

    Array.from(Array(numberOfGroups).keys()).forEach((i) => {
      properties.push(`groupClassName${i + 1}`);
    });

    return properties;
  },

  initialContent: {
    numberOfGroups: 3,

    groupClassName1: "shrink",
    groupClassName2: "grow",
    groupClassName3: "shrink",
  },

  validations: [
    [
      "numberOfGroups",
      (numberOfGroups) => {
        if (numberOfGroups <= 0) {
          return "Number of groups must a positiv number";
        }
      },
    ],
  ],
});
