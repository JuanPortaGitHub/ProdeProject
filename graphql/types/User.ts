import { enumType, idArg, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Grupo } from "./Grupo";
import { Prode_Partido_Usuario } from "./Prode_Partido_Usuario";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("mail");
    t.string("name");
    t.string("apellido");
    t.string("password");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("Grupos", {
      type: User,
      resolve: (parent, args, context) => {
        return context.prisma.grupo
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .UsuariosDeGrupo();
      },
    });
    t.list.field("Prode_Usuario", {
      type: Prode_Partido_Usuario,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: { id: Number(parent.id) || undefined },
          })
          .Prode_Partido_Usuario();
      },
    });
  },
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllUsers", {
      type: User,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
    t.field("GetUserById", {
      type: User,
      args: {
        id: idArg(),
      },
      resolve(_parent, { id }, ctx) {
        return ctx.prisma.user.findFirst({ where: { id: Number(id) } });
      },
    });
  },
});

// export const FindUserQuery = extendType({
//   type: "Query",
//   definition(t) {
//     t.nonNull.field("FindUser", {
//       type: User,
//       args: {
//         id: idArg(),
//       },
//       resolve(_parent, { id }, ctx) {
//         return ctx.prisma.user.findFirst({ where: { id: Number(id) } });
//       },
//     });
//   },
// });
