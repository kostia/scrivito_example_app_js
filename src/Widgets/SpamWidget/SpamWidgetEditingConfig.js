import * as Scrivito from "scrivito";

import TextWidget from "../TextWidget/TextWidgetClass";

Scrivito.provideEditingConfig("SpamWidget", {
  title: "Spam",
  properties: ["spam"],
  initialContent: {
    spam: new TextWidget({ text: "Spam" }),
  },
});
