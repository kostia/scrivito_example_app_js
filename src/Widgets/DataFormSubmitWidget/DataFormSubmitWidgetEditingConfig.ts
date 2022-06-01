import * as Scrivito from "scrivito";

import { DataFormSubmitWidget } from "./DataFormSubmitWidgetClass";

Scrivito.provideEditingConfig(DataFormSubmitWidget, {
  title: "Data Form Submit",

  attributes: {
    dangerous: {
      title: "Is dangerous?",
      description:
        "A 'dangerous' submit button wil be marked as such and will ask for confirmation once clicked.",
    },
  },

  properties: ["title", "dangerous"],

  initialContent: {
    title: "Submit",
    dangerous: false,
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
