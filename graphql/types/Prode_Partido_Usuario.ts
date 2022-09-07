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
    t.list.field("Usuario", {
      type: User,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.prode_Partido_Usuario
          .findUnique({
            where: { userId: parent.userId || null || undefined },
          })
          .Usuario();
      },
    });
  },
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("users", {
      type: "User",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
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
