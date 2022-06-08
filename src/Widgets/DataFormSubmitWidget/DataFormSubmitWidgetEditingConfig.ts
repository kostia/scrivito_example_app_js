import * as Scrivito from "scrivito";

import { DataFormSubmitWidget } from "./DataFormSubmitWidgetClass";

Scrivito.provideEditingConfig(DataFormSubmitWidget, {
  title: "Data Form Submit Button",

  attributes: {
    size: {
      title: "Button size",
    },
  },

  properties: ["title", "size"],

  initialContent: {
    title: "Submit",
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
