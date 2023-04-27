import * as Scrivito from "scrivito";

import { Balloon } from "./BalloonDataClass";

Scrivito.provideEditingConfig(Balloon, {
  title: "Balloon",

  attributes: {
    size: { title: "Size" },
    color: { title: "Color" },
  },
});
