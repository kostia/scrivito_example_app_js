import * as Scrivito from "scrivito";

export const LinkedSectionWidget = Scrivito.provideWidgetClass("LinkedSectionWidget", {
  attributes: {
    target: "link",
    template: "widgetlist",
  },
});
