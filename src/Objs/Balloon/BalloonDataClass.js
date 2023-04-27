import * as Scrivito from "scrivito";

const balloons = {
  1: { size: "large", color: "red" },
  2: { size: "small", color: "red" },
  3: { size: "large", color: "green" },
  4: { size: "small", color: "green" },
  5: { size: "large", color: "blue" },
  6: { size: "small", color: "blue" },
};

export const Balloon = Scrivito.provideDataClass("Balloons", {
  connection: {
    get: async (id) => balloons[id] || null,

    index: async (params) => {
      let ids = Object.keys(balloons);

      const filters = params.filters();

      Object.keys(filters).forEach((field) => {
        if (!field) return;
        ids = ids.filter((id) => balloons[id][field] === filters[field]);
      });

      const order = params.order();

      order.forEach(([field, direction]) => {
        if (!field) return;

        ids = ids.sort((id1, id2) => {
          const value1 = balloons[id1][field];
          const value2 = balloons[id2][field];

          if (value1 < value2) return direction === "asc" ? -1 : 1;
          if (value1 > value2) return direction === "asc" ? 1 : -1;

          return 0;
        });
      });

      return { results: ids };
    },
  },
});
