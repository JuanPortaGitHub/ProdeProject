import { enumType, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Grupo } from "./Grupo";
import { Prode_Partido_Usuario } from "./Prode_Partido_Usuario";

export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("mail");
    t.string("name");
    t.string("apellido");
    t.string("password");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("Prode_Usuario", {
      type: Prode_Partido_Usuario,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: { id: parent.id || null || undefined },
          })
          .Prode_Partido_Usuario();
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

// export const UsersQueryById = extendType({
//   type: "Query",
//   definition(t) {
//     t.nonNull.list.field("users", {
//       type: "User",
//       resolve(_parent, args, ctx) {
//         return ctx.prisma.user.findUnique({where: id=args.id});
//       },
//     });
//   },
// });
