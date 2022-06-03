import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormSubmitWidget } from "./DataFormSubmitWidgetClass";
import { SUBMIT_EVENT_TYPE } from "../DataFormWidget/DataFormWidgetComponent";

Scrivito.provideComponent(DataFormSubmitWidget, ({ widget }) => {
  const ref = React.useRef<HTMLDivElement>();

  return (
    <div className={getClassName()} ref={ref} onClick={onClick}>
      {widget.get("title")}
    </div>
  );

  function getClassName() {
    let className = "btn";

    if (widget.get("size") === "small") className += " btn-sm";
    if (widget.get("dangerous")) className += " btn-danger";

    return className;
  }

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    if (widget.get("dangerous")) {
      if (window.confirm("Are you sure?")) submit();
    } else {
      submit();
    }
  }

  function submit() {
    ref.current?.dispatchEvent(
      new CustomEvent(SUBMIT_EVENT_TYPE, { bubbles: true, cancelable: true })
    );
  }
});
