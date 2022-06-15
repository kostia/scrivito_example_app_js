import * as Scrivito from "scrivito";

import { DataFormSubmitWidget } from "./DataFormSubmitWidgetClass";

Scrivito.provideEditingConfig(DataFormSubmitWidget, {
  title: "Data Form Submit Buttons",

  attributes: {
    submitTitle: {
      title: "Title of the submit button",
    },

    hasReset: {
      title: "Should a reset button appear?",
    },

    resetTitle: {
      title: "Title of the reset button",
    },

    size: {
      title: "Button size",
    },
  },

  properties(widget) {
    const properties = ["submitTitle", "size", "hasReset"];
    if (widget.get("hasReset")) properties.push("resetTitle");

    return properties;
  },

  initialContent: {
    submitTitle: "Submit",
    hasReset: true,
    resetTitle: "Cancel",
  },

  validations: [
    [
      "submitTitle",
      (submitTitle) => {
        if (!submitTitle) return "Please provide a title for the submit button";
      },
    ],
  ],
});
