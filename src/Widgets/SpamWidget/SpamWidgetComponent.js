import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("SpamWidget", ({ widget }) => {
  return <Scrivito.ContentTag tag="div" content={widget} attribute="spam" />;
});
