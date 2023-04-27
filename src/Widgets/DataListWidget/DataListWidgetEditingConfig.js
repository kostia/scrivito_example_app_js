import * as Scrivito from "scrivito";

import { DataListWidget } from "./DataListWidgetClass";

Scrivito.provideEditingConfig(DataListWidget, {
  title: "Data List",

  attributes: {
    dataLocator: {
      title: "Data",
    },
  },

  properties: ["dataLocator"],
});
