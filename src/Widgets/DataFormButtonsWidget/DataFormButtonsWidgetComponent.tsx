import * as React from "react";
import * as Scrivito from "scrivito";

import { DataFormButtonsWidget } from "./DataFormButtonsWidgetClass";
import { DataFormContext } from "../DataFormWidget/DataFormWidgetComponent";

const BASE_CLASS_NAME = "col-md-6 d-flex";

Scrivito.provideComponent(DataFormButtonsWidget, ({ widget }) => {
  const { isEditing } = React.useContext(DataFormContext);
  if (!isEditing) return null;

  return (
    <div className="row mt-0">
      <Scrivito.ContentTag
        content={widget}
        attribute="templateLeft"
        className={classNameLeft()}
      />
      <Scrivito.ContentTag
        content={widget}
        attribute="templateRight"
        className={classNameRight()}
      />
    </div>
  );

  function classNameLeft() {
    let className = BASE_CLASS_NAME;

    const justifyContentLeft = widget.get("justifyContentLeft");
    if (justifyContentLeft) {
      className += ` justify-content-${justifyContentLeft}`;
    }

    return className;
  }

  function classNameRight() {
    let className = BASE_CLASS_NAME;

    const justifyContentRight = widget.get("justifyContentRight");
    if (justifyContentRight) {
      className += ` justify-content-${justifyContentRight}`;
    }

    return className;
  }
});
