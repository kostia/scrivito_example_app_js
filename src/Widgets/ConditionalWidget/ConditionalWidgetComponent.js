import * as React from "react";
import * as Scrivito from "scrivito";

import { ConditionalWidget } from "./ConditionalWidgetClass";

Scrivito.provideComponent(ConditionalWidget, ({ widget }) => {
  const dataScope = Scrivito.useDataLocator(widget.get("condition"));

  if (dataScope.containsData()) {
    return <Scrivito.ContentTag content={widget} attribute="content" />;
  }

  return <>Forbidden!</>;
});
