import { enumType, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { User } from "./User";

export const Prode_Partido_Usuario = objectType({
  name: "Prode_Partido_Usuario",
  definition(t) {
    t.int("userId");
    t.string("info_PartidosId");
    t.string("Goles_Local");
    t.string("Goles_Visitante");
    t.string("Ganador");
    t.boolean("Tiempo_Extra");
    t.boolean("Penales");
    t.int("Puntos");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("usuario", {
      type: User,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: parent.userId,
            },
          })
          .Prode_Partido_Usuario();
      },
    });
  },
});

export const ProdePartidosUsuarios_Query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("prode_partidos_usuario", {
      type: "Prode_Partido_Usuario",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.prode_Partido_Usuario.findMany();
      },
    });
  },
});
