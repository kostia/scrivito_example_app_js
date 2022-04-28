import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("DataListWidget", {
  title: "Data List",

  attributes: {
    dataClass: {
      title: "Data Class",
    },
  },

  properties: ["dataClass"],

  validations: [
    [
      "dataClass",
      (dataClass) => {
        if (!dataClass) return "Data Class is missing";
      },
    ],
  ],
});
