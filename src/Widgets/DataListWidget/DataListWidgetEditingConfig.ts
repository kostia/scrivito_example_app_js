import * as Scrivito from "scrivito";

import { DataListWidget } from "./DataListWidgetClass";
import { DataListItemWidget } from "../DataListItemWidget/DataListItemWidgetClass";

Scrivito.provideEditingConfig(DataListWidget, {
  title: "Data List",
  description: "Lists all data matching the provided data class",

  attributes: {
    dataClass: {
      title: "Data class",
      description: "Class of data to be listed",
    },

    iconName: {
      title: "Name of the icon",
    },
  },

  properties: ["dataClass", "iconName"],

  validations: [
    [
      "dataClass",
      (dataClass) => {
        if (!dataClass) return "Data class must be specified";
      },
    ],
  ],

  initialContent: {
    template: [new DataListItemWidget()],
  },
});
