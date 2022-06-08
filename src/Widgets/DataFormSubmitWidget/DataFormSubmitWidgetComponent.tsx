import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormSubmitWidget } from "./DataFormSubmitWidgetClass";

Scrivito.provideComponent(DataFormSubmitWidget, ({ widget }) => {
  return (
    <button type="submit" className={getClassName()}>
      {widget.get("title")}
    </button>
  );

  function getClassName() {
    let className = "btn";
    if (widget.get("size") === "small") className += " btn-sm";

    return className;
  }
});
