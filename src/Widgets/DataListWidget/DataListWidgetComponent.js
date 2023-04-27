import * as React from "react";
import * as Scrivito from "scrivito";

import { DataListWidget } from "./DataListWidgetClass";

Scrivito.provideComponent(DataListWidget, ({ widget }) => {
  const dataScope = Scrivito.useDataLocator(widget.get("dataLocator"));

  if (dataScope.isEmpty()) return <>No Data!</>;

  return (
    <>
      {dataScope.take(100).map((dataItem) => {
        const size = dataItem.get("size");
        const color = dataItem.get("color");

        const style =
          size === "small"
            ? {
                width: "2rem",
                height: "50px",
              }
            : {
                width: "4rem",
                height: "100px",
              };

        return (
          <div
            key={`${size}-${color}`}
            style={{
              ...style,
              borderRadius: "80%",
              background: color,
              marginBottom: "10px",
            }}
          />
        );
      })}
    </>
  );
});
