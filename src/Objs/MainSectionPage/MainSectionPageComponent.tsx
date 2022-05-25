import * as React from "react";
import * as Scrivito from "scrivito";

import { MainSectionPage } from "./MainSectionPageObjClass";

Scrivito.provideLayoutComponent(MainSectionPage, () => {
  const sections = MainSectionPage.all().take();

  return (
    <>
      <div className="jr-sidebar-left">
        {sections.map((section) => (
          <SectionButton key={section.id()} section={section} />
        ))}
      </div>

      <main>
        <div className="container-xxl">
          <Scrivito.CurrentPage />
        </div>
      </main>
    </>
  );
});

const SectionButton = Scrivito.connect(
  ({ section }: { section: Scrivito.Obj }) => {
    return (
      <Scrivito.LinkTag to={section} className={linkClassName()}>
        <i className={iconClassName()} />
        <span className="label">{section.get("title")}</span>
      </Scrivito.LinkTag>
    );

    function linkClassName() {
      let className = "jr-buttonbar";
      if (Scrivito.isOnCurrentPath(section)) className += " active";

      return className;
    }

    function iconClassName() {
      return `jr-icon jr-icon-${section.get("iconName")}`;
    }
  }
);

Scrivito.provideComponent(MainSectionPage, ({ page }) => (
  <Scrivito.ContentTag content={page} attribute="template" />
));
