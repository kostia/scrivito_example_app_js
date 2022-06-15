import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormDeleteWidget } from "./DataFormDeleteWidgetClass";

Scrivito.provideComponent(DataFormDeleteWidget, ({ widget }) => {
  // @ts-ignore
  const dataItem = Scrivito.useDataItem();
  const [isConfirming, setIsConfirming] = React.useState(false);

  if (isConfirming) {
    return (
      <>
        <div className={getCancelClassName()} onClick={onCancel}>
          {widget.get("cancelTitle")}
        </div>
        <div className={getDeleteClassName()} onClick={onConfirm}>
          {widget.get("confirmTitle")}
        </div>
      </>
    );
  } else {
    return (
      <div className={getDeleteClassName()} onClick={onDelete}>
        {widget.get("title")}
      </div>
    );
  }

  function getDeleteClassName() {
    let className = "btn btn-danger";
    if (widget.get("size") === "small") className += " btn-sm";

    return className;
  }

  function getCancelClassName() {
    let className = "btn";
    if (widget.get("size") === "small") className += " btn-sm";

    return className;
  }

  function onDelete(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    setIsConfirming(true);
  }

  function onCancel(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    setIsConfirming(false);
  }

  function onConfirm(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    dataItem?.obj().destroy();
  }
});
