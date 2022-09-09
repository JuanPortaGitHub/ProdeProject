import { enumType, idArg, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Info_Partidos } from "./Info_Partidos";
import { User } from "./User";

export const Prode_Partido_Usuario = objectType({
  name: "Prode_Partido_Usuario",
  definition(t) {
    t.id("userId");
    t.id("info_PartidosId");
    t.string("Goles_Local");
    t.string("Goles_Visitante");
    t.string("Ganador");
    t.boolean("Tiempo_Extra");
    t.boolean("Penales");
    t.int("Puntos");
    t.string("createdAt");
    t.string("updatedAt");
    t.field("InfoPartido", {
      type: Info_Partidos,
      async resolve(parent, _args, ctx) {
        console.log("parent", parent);
        return await ctx.prisma.prode_Partido_Usuario
          .findUnique({
            where: {
              userId: Number(parent.userId) || null || undefined,
              info_PartidosId:
                Number(parent.info_PartidosId) || null || undefined,
            },
          })
          .Partido();
      },
    });
  },
});

export const ProdePartidosUsuarios_Query = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllProdePartidoUsuarios", {
      type: Prode_Partido_Usuario,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.prode_Partido_Usuario.findMany();
      },
    });
    t.field("GetProdePartidoUsuarioById", {
      type: Prode_Partido_Usuario,
      args: {
        userId: idArg(),
        info_PartidosId: idArg(),
      },
      resolve(_parent, { userId, info_PartidosId }, ctx) {
        return ctx.prisma.prode_Partido_Usuario.findFirst({
          where: {
            userId: Number(userId),
            info_PartidosId: Number(info_PartidosId),
          },
        });
      },
    });
  },
});
// export const ProdePartidosUsuarios_Query = extendType({
//   type: "Query",
//   definition(t) {
//     t.nonNull.list.nonNull.field("usuario_prode", {
//       type: "Prode_Partido_Usuario",
//       resolve(parent, args, context, info) {
//         return { llegue: "llegue" };
//       },
// resolve: (_parent, _args, context) => {
//   return context.prisma.prode_Partido_Usuario.findMany();
// },
//     });
//   },
// });
