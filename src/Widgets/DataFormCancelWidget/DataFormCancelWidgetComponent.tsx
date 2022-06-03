import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormCancelWidget } from "./DataFormCancelWidgetClass";
import { RESET_EVENT_TYPE } from "../DataFormWidget/DataFormWidgetComponent";

Scrivito.provideComponent(DataFormCancelWidget, ({ widget }) => {
  const ref = React.useRef<HTMLDivElement>();

  return (
    <div className={getClassName()} ref={ref} onClick={onClick}>
      {widget.get("title")}
    </div>
  );

  function getClassName() {
    let className = "btn";
    if (widget.get("size") === "small") className += " btn-sm";

    return className;
  }

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    ref.current?.dispatchEvent(
      new CustomEvent(RESET_EVENT_TYPE, { bubbles: true, cancelable: true })
    );
  }
});
