import * as React from "react";
import * as Scrivito from "scrivito";

import IconComponent from "../../Components/Icon";
import { WrapIfClassName } from "../../Components/WrapIfClassName";
import { alignmentClassName } from "../../utils/alignmentClassName";
import { FaIconWidget } from "./FaIconWidgetClass";

Scrivito.provideComponent(FaIconWidget, ({ widget }) => (
  <WrapIfClassName className={alignmentClassName(widget.get("alignment"))}>
    <IconComponent
      icon={widget.get("icon")}
      size={widget.get("size")}
      link={widget.get("link")}
    />
  </WrapIfClassName>
));
