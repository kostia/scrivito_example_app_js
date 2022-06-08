import * as Scrivito from "scrivito";

import { DataFormDeleteWidget } from "./DataFormDeleteWidgetClass";

Scrivito.provideEditingConfig(DataFormDeleteWidget, {
  title: "Data Form Delete Button",

  attributes: {
    dangerous: {
      title: "Is dangerous?",
      description:
        "A 'dangerous' delete button wil be marked as such and will ask for confirmation once clicked.",
    },

    size: {
      title: "Button size",
    },
  },

  properties: ["title", "dangerous", "size"],

  initialContent: {
    title: "Delete",
    dangerous: true,
  },
});
