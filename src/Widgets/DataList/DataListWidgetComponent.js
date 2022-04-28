import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("DataListWidget", ({ widget }) =>
  Scrivito.getClass(widget.get("dataClass"))
    .all()
    .take()
    .map((obj) => (
      <Scrivito.ContentTag
        key={obj.id()}
        content={widget}
        attribute="template"
        dataContext={{
          _class: obj.objClass(),
          _id: obj.id(),
          title: obj.get("title"),
        }}
      />
    ))
);
