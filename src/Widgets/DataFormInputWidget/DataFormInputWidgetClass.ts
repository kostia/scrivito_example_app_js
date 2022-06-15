import * as Scrivito from "scrivito";

export const DataFormInputWidget = Scrivito.provideWidgetClass(
  "DataFormInputWidget",
  {
    attributes: {
      attribute: "string",
      title: "string",
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
      hideLabel: "boolean",
    },
  }
);
