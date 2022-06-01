import * as Scrivito from "scrivito";

import { DataFormCancelWidget } from "./DataFormCancelWidgetClass";

Scrivito.provideEditingConfig(DataFormCancelWidget, {
  title: "Data Form Cancel",

  attributes: {
    size: {
      title: "Button size",
    },
  },

  properties: ["title", "size"],

  initialContent: {
    title: "Cancel",
  },

  validations: [
    [
      "title",
      (title) => {
        if (!title) return "Please provide a title for the button";
      },
    ],
  ],
});
