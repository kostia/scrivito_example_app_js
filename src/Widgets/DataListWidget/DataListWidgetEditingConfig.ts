import * as Scrivito from "scrivito";

import { DataListWidget } from "./DataListWidgetClass";

Scrivito.provideEditingConfig(DataListWidget, {
  title: "Data List",
  description: "Lists all data matching the provided data class",

  attributes: {
    dataClass: {
      title: "Data class",
      description: "Class of data to be listed",
    },

    dataPage: {
      title: "Data page",
      description: "Page to display the data",
    },

    iconName: {
      title: "Name of the icon",
    },
  },

  properties: ["dataClass", "dataPage", "iconName"],

  validations: [
    [
      "dataClass",
      (dataClass) => {
        if (!dataClass) return "Data class must be specified";
      },
    ],

    [
      "dataPage",
      (dataPage) => {
        if (!dataPage) return "Data page must be selected";
      },
    ],
  ],
});
