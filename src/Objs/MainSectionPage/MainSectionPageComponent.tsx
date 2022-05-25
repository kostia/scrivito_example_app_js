import * as React from "react";
import * as Scrivito from "scrivito";

import { MainSectionPage } from "./MainSectionPageObjClass";

Scrivito.provideLayoutComponent(MainSectionPage, () => (
  <>
    <ul>
      {MainSectionPage.all()
        .take()
        .map((mainSectionPage) => (
          <li key={mainSectionPage.id()}>
            <Scrivito.LinkTag to={mainSectionPage}>
              {Scrivito.isCurrentPage(mainSectionPage) && <span>&gt;</span>}
              {mainSectionPage.get("title")}({mainSectionPage.get("iconName")})
            </Scrivito.LinkTag>
          </li>
        ))}
    </ul>

    <Scrivito.CurrentPage />
  </>
));

Scrivito.provideComponent(MainSectionPage, ({ page }) => (
  <Scrivito.ContentTag content={page} attribute="template" />
));
