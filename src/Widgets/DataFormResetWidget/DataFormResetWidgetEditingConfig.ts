import * as Scrivito from "scrivito";

import { DataFormResetWidget } from "./DataFormResetWidgetClass";

Scrivito.provideEditingConfig(DataFormResetWidget, {
  title: "Data Form Reset Button",

  attributes: {
    size: {
      title: "Button size",
    },
  },

  properties: ["title", "size"],

  initialContent: {
    title: "Reset",
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
