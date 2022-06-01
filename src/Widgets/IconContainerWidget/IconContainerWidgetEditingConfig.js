import * as Scrivito from "scrivito";
import iconContainerWidgetIcon from "../../assets/images/icon_container_widget.svg";
import { FaIconWidget } from "../FaIconWidget/FaIconWidgetClass.ts";

Scrivito.provideEditingConfig("IconContainerWidget", {
  title: "Icon List",
  thumbnail: iconContainerWidgetIcon,
  attributes: {
    iconList: {
      title: "Icon list",
    },
  },
  properties: ["iconList"],
  initialContent: {
    iconList: [
      new FaIconWidget({ icon: "fa-check-square-o" }),
      new FaIconWidget({ icon: "fa-check-square-o" }),
      new FaIconWidget({ icon: "fa-check-square-o" }),
    ],
  },
});
