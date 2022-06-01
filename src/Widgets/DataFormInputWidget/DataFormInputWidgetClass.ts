import * as Scrivito from "scrivito";

export const DataFormInputWidget = Scrivito.provideWidgetClass(
  "DataFormInputWidget",
  {
    attributes: {
      attribute: "string",
      type: [
        "enum",
        {
          values: [
            // More to come...
            "text",
          ],
        },
      ],

      placeholder: "string",
      disabled: "boolean",
    },
  }
);
