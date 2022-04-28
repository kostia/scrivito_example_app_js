import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("DataPage", {
  attributes: {
    title: {
      title: "Title",
    },

    dataClass: {
      title: "Data Class",
    },

    template: {
      title: "Template",
    },
  },

  properties: ["title", "dataClass"],

  validations: [
    [
      "dataClass",
      (dataClass) => {
        if (!dataClass) return "Data Class is missing";
      },
    ],
  ],
});
