import * as React from "react";
import * as Scrivito from "scrivito";

import { IconWidget } from "./IconWidgetClass";

Scrivito.provideComponent(IconWidget, ({ widget }) => {
  return <i className={getClassName()} />;

  function getClassName() {
    let className = "jr-icon d-block";

    const icon = widget.get("icon");
    if (icon) className += ` jr-icon-${icon}`;

    const size = widget.get("size");
    if (size) className += `-${size}`;

    const color = widget.get("color");
    if (color) className += ` text-${color}`;

    const margin = widget.get("margin");
    if (margin) className += ` me-${margin}`;

    const display = widget.get("display");
    if (display) className += ` d-${display}`;

    return className;
  }
});
