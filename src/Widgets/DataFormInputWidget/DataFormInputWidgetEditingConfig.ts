import * as Scrivito from "scrivito";

import { DataFormInputWidget } from "./DataFormInputWidgetClass";

Scrivito.provideEditingConfig(DataFormInputWidget, {
  title: "Data Form Input",

  attributes: {
    attribute: {
      title: "Name of the data attribute in question",
    },

    title: {
      title: "Input title",
    },

    type: {
      title: "Type of the input",
    },

    placeholder: {
      title: "Placeholder for the input",
    },

    disabled: {
      title: "Is disabled?",
      description: "Determines if the input should be disabled.",
    },

    hideLabel: {
      title: "Hide the input label?",
    },
  },

  properties(widget) {
    const properties = ["type", "placeholder", "disabled", "hideLabel"];

    if (!widget.get("hideLabel")) {
      properties.unshift("title");
    }

    properties.unshift("attribute");

    return properties;
  },

  initialContent: {
    type: "text",
    disabled: false,
    hideLabel: false,
  },

  validations: [
    [
      "attribute",
      (attribute) => {
        if (!attribute) return "Please specify a data attribute name";
      },
    ],

    [
      "type",
      (type) => {
        if (!type) return "Please select an input type";
      },
    ],
  ],
});
