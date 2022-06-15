import * as Scrivito from "scrivito";

import { DataFormButtonsWidget } from "./DataFormButtonsWidgetClass";

Scrivito.provideEditingConfig(DataFormButtonsWidget, {
  title: "Data Form Buttons",

  attributes: {
    justifyContentLeft: {
      title: "Justify left side",
    },

    justifyContentRight: {
      title: "Justify right side",
    },
  },

  properties: ["justifyContentLeft", "justifyContentRight"],
});
