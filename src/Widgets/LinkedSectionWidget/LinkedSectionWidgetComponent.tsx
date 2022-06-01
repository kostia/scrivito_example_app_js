import * as React from "react";
import * as Scrivito from "scrivito";

import { LinkedSectionWidget } from "./LinkedSectionWidgetClass";

Scrivito.provideComponent(LinkedSectionWidget, ({ widget }) => {
  // Disable link, so that in-place editing can take place.
  const target = Scrivito.isInPlaceEditingActive()
    ? null
    : widget.get("target");

  return (
    <Scrivito.LinkTag to={target}>
      <Scrivito.ContentTag content={widget} attribute="template" />
    </Scrivito.LinkTag>
  );
});
