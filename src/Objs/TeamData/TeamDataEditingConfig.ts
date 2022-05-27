import * as Scrivito from "scrivito";

import { TeamData } from "./TeamDataObjClass";

Scrivito.provideEditingConfig(TeamData, {
  title: "Team",
  description: "Represents an IAM team",

  titleForContent(team) {
    return team.get("name");
  },

  attributes: {
    name: {
      title: "Name",
      description: "Name of the team",
    },

    description: {
      title: "Description",
      description: "Description of the team",
    },
  },

  properties: ["name", "description"],

  validations: [
    [
      "name",
      (name) => {
        if (!name) return "A team must have a name";

        // FIXME: Remove the string cast once fixed in the SDK
        if (TeamData.where("name", "equals", name as string).count() > 1) {
          return `Duplicate team name: "${name}". A team name must be unique.`;
        }
      },
    ],

    [
      "description",
      (description) => {
        if (!description) return "A team must have a description";
      },
    ],
  ],
});
