import * as Scrivito from "scrivito";

import HeadlineWidget from "../Widgets/HeadlineWidget/HeadlineWidgetClass";
import SectionWidget from "../Widgets/SectionWidget/SectionWidgetClass";

export const defaultPageEditingConfigAttributes = {
  title: {
    title: "Title",
    description: "Limit to 55 characters.",
  },
  navigationBackgroundImage: {
    title: "Header background",
    description: "The background image/video of the header.",
  },
  navigationBackgroundImageGradient: {
    title: "Use gradient for header image?",
    description: "Default: No",
  },
  navigationHeight: {
    title: "Header height",
    description: "Default: Small",
    values: [
      { value: "small", title: "Small" },
      { value: "medium-height", title: "Medium" },
      { value: "full-height", title: "Fullscreen" },
    ],
  },
};

export const defaultPageInitialContent = {
  body: [
    new SectionWidget({
      content: [new HeadlineWidget({ style: "h1" })],
    }),
  ],
  navigationHeight: "small",
};

export function defaultPageProperties(obj) {
  return [
    "title",
    "navigationHeight",
    "navigationBackgroundImage",
    [
      "navigationBackgroundImageGradient",
      { enabled: !!obj.get("navigationBackgroundImage") },
    ],
  ];
}

window.validationCount ||= 0;

export const defaultPageValidations = [
  [
    "title",

    (title) => {
      window.validationCount += 1;

      console.log("validation count", validationCount);

      Scrivito.Obj.where("title", "equals", title).take();

      if (title.length === 0) {
        return {
          message: "The title should be set.",
          severity: "warning",
        };
      }
    },
  ],
];
