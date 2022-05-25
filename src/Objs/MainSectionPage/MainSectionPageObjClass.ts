import * as Scrivito from "scrivito";

export const MainSectionPage = Scrivito.provideObjClass("MainSectionPage", {
  attributes: {
    title: "string",
    iconName: "string",
    template: "widgetlist",
  },
});
