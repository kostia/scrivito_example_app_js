import * as Scrivito from "scrivito";

export const IconWidget = Scrivito.provideWidgetClass("IconWidget", {
  attributes: {
    icon: [
      "enum",
      {
        values: ["team", "user", "chevron-right"],
      },
    ],

    size: ["enum", { values: ["big"] }],
    color: ["enum", { values: ["orange", "muted"] }],
    margin: ["enum", { values: ["1", "2", "3", "4", "5"] }],
    display: ["enum", { values: ["inline", "block"] }],
  },
});
