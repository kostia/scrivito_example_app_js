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

    title: {
      title: "Title",
      description: "Title to be displayed in Scrivito UI",
    },
  },

  properties: ["dataClass", "title"],

  validations: [
    [
      "dataClass",
      (dataClass) => {
        if (!dataClass) return "Data class must be specified";
      },
    ],

    [
      "title",
      (title) => {
        if (!title) {
          return {
            message: "A data page with a title is much easier to locate",
            severity: "warning",
          };
        }
      },
    ],
  ],
});
