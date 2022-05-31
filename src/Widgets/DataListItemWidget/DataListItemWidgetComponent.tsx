import * as React from "react";
import * as Scrivito from "scrivito";

import { DataListItemWidget } from "./DataListItemWidgetClass";

Scrivito.provideComponent(DataListItemWidget, ({ widget }) => {
  let numberOfGroups = widget.get("numberOfGroups");
  if (numberOfGroups <= 0) numberOfGroups = 0;

  return (
    <div className="jr-list-item">
      {Array.from(Array(numberOfGroups).keys()).map((i) => (
        <Group key={i} widget={widget} groupIndex={i + 1} />
      ))}
    </div>
  );
});

const Group = Scrivito.connect(
  ({ widget, groupIndex }: { widget: Scrivito.Widget; groupIndex: number }) => {
    const attributeName = `groupTemplate${groupIndex}`;

    return (
      <Scrivito.ContentTag
        content={widget}
        attribute={attributeName}
        className={getClassName()}
      />
    );

    function getClassName() {
      let className = "jr-list-group";

      const attributeName = `groupClassName${groupIndex}`;
      const groupClassName = widget.get(attributeName);
      if (groupClassName) className += ` ${groupClassName}`;

      return className;
    }
  }
);
