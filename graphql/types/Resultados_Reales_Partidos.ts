import { enumType, extendType, intArg, objectType, stringArg } from "nexus";
import { Info_Partidos } from "./Info_Partidos";

export const Resultados_Reales_Partidos = objectType({
  name: "Resultados_Reales_Partidos",
  definition(t) {
    t.int("id");
    t.string("Goles_Local");
    t.string("Goles_Visitante");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("Info_Partidos", {
      type: Info_Partidos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.resultados_Reales_Partidos
          .findUnique({
            where: {
              id: parent.id || null || undefined,
            },
          })
          .Info_Partidos();
      },
    });
  },
});

export const Resultados_Reales_Partidos_Query = extendType({
  type: "Query",
  definition(t) {
    t.list.field("resultados_Reales_Partidos", {
      type: "Resultados_Reales_Partidos",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.resultados_Reales_Partidos.findMany();
      },
    });
  },
});
