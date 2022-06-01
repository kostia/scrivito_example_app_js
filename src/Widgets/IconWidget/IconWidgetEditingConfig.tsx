import * as Scrivito from "scrivito";

import { IconWidget } from "./IconWidgetClass";

Scrivito.provideEditingConfig(IconWidget, {
  title: "Icon",

  properties: ["icon", "size", "color", "margin", "display"],

  initialContent: {
    size: "big",
    color: "orange",
    margin: "2",
    display: "block",
  },
});
