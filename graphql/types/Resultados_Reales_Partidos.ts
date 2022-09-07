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
        return await ctx.prisma.info_Partidos
          .findUnique({
            where: {
              resultados_Reales_PartidosId: parent.id,
            },
          })
          .Resultado();
      },
    });
  },
});

export const Resultados_Reales_Partidos_Query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("resultados_Reales_Partidos", {
      type: "Resultados_Reales_Partidos",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.resultados_Reales_Partidos.findMany();
      },
    });
  },
});
