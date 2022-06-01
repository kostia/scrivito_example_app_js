import * as Scrivito from "scrivito";

import { LinkedSectionWidget } from "./LinkedSectionWidgetClass";

Scrivito.provideEditingConfig(LinkedSectionWidget, {
  title: "Linked Section",

  attributes: {
    target: {
      title: "Link target",
    },
  },

  properties: ["target"],

  validations: [
    [
      "target",
      (target) => {
        if (!target) return "Target of a linked section must be specified";
      },
    ],
  ],
});
