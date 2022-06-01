import * as Scrivito from "scrivito";

import { DataListWidget } from "./DataListWidgetClass";
import { DataListItemWidget } from "../DataListItemWidget/DataListItemWidgetClass";
import { LinkedSectionWidget } from "../LinkedSectionWidget/LinkedSectionWidgetClass";

Scrivito.provideEditingConfig(DataListWidget, {
  title: "Data List",
  description: "Lists all data matching the provided data class",

  attributes: {
    dataClass: {
      title: "Data class",
      description: "Class of data to be listed",
    },
  },

  properties: ["dataClass"],

  validations: [
    [
      "dataClass",
      (dataClass) => {
        if (!dataClass) return "Data class must be specified";
      },
    ],
  ],

  initialContent: {
    template: [
      new LinkedSectionWidget({
        template: [new DataListItemWidget()],
      }),
    ],
  },
});
