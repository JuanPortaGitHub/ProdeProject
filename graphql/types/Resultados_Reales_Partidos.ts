import {
  enumType,
  extendType,
  idArg,
  intArg,
  objectType,
  stringArg,
} from "nexus";
import { Info_Partidos } from "./Info_Partidos";

export const Resultados_Reales_Partidos = objectType({
  name: "Resultados_Reales_Partidos",
  definition(t) {
    t.int("id");
    t.string("Goles_Local");
    t.string("Goles_Visitante");
    t.string("createdAt");
    t.string("updatedAt");
    t.field("Info_Partidos", {
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
    t.list.field("GetAllResultadosReales", {
      type: Resultados_Reales_Partidos,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.resultados_Reales_Partidos.findMany();
      },
    });
    t.field("GetResultadosRealesById", {
      type: Resultados_Reales_Partidos,
      args: {
        id: idArg(),
      },
      resolve(_parent, { id }, ctx) {
        return ctx.prisma.resultados_Reales_Partidos.findFirst({
          where: { id: Number(id) },
        });
      },
    });
  },
});
