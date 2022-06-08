import * as Scrivito from "scrivito";

import { DataFormDeleteWidget } from "./DataFormDeleteWidgetClass";

Scrivito.provideEditingConfig(DataFormDeleteWidget, {
  title: "Data Form Delete Button",

  attributes: {
    size: {
      title: "Button size",
    },
  },

  properties: ["title", "confirmTitle", "cancelTitle", "size"],

  initialContent: {
    title: "Delete",
    confirmTitle: "Confirm Delete",
    cancelTitle: "Cancel",
  },
});
