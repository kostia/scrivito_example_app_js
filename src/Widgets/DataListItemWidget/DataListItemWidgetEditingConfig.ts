import * as Scrivito from "scrivito";

import { DataListItemWidget } from "./DataListItemWidgetClass";

Scrivito.provideEditingConfig(DataListItemWidget, {
  title: "Data List Item",

  attributes: {
    numberOfGroups: {
      title: "Number of groups",
    },
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

  initialContent: {
    numberOfGroups: 3,
  },
});