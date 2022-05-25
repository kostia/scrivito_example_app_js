import * as Scrivito from "scrivito";

import { MainSectionPage } from "./MainSectionPageObjClass";

Scrivito.provideEditingConfig(MainSectionPage, {
  title: "Main Section",

  attributes: {
    title: {
      title: "Title",
    },

    iconName: {
      title: "Name of the icon",
    },
  },

  properties: ["title", "iconName"],
});
