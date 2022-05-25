import * as Scrivito from "scrivito";

import { DataPage } from "./DataPageObjClass";

Scrivito.provideEditingConfig(DataPage, {
  title: "Data Page",
  description: "Represents a data obj",

  attributes: {
    dataClass: {
      title: "Data class",
      description: "Class of data to be represented",
    },

    template: {
      title: "Template",
    },
  },

  properties: ["dataClass"],

  validations: [
    [
      "dataClass",
      (dataClass) => {
        if (!dataClass) return "Data class must be specified";
      },
    ],
  ],
});
