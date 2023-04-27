import * as Scrivito from "scrivito";

import { ConditionalWidget } from "./ConditionalWidgetClass";

Scrivito.provideEditingConfig(ConditionalWidget, {
  title: "Conditional Widget",

  attributes: {
    condition: {
      title: "Condition",
    },
  },

  properties: ["condition"],
});
