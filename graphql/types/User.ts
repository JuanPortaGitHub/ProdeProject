import { enumType, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Grupo } from "./Grupo";
// import { Link } from "./Link";

// model User {
//   id                 Int                  @id @default(autoincrement())
//   mail               String               @unique
//   name               String
//   apellido           String
//   password           String
//   grupos             Grupo[]
//   Prode_Usuario      Prode_Usuario[]
//   Usuarios_Por_Grupo Usuarios_Por_Grupo[]
//   createdAt          DateTime             @default(now()) @db.Timestamptz(3)
//   updatedAt          DateTime             @updatedAt @db.Timestamptz(3)
// }

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("mail");
    t.string("name");
    t.string("apellido");
    t.string("password");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("grupos", {
      type: Grupo,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .grupos();
      },
    });
  },
});

// const Role = enumType({
//   name: "Role",
//   members: ["USER", "ADMIN"],
// });

// export const UserFavorites = extendType({
//   type: "Query",
//   definition(t) {
//     t.list.field("favorites", {
//       type: "Link",
//       async resolve(_, _args, ctx) {
//         const user = await ctx.prisma.user.findUnique({
//           where: {
//             email: ctx.user.email,
//           },
//           include: {
//             favorites: true,
//           },
//         });
//         if (!user) throw new Error("Invalid user");
//         return user.favorites;
//       },
//     });
//   },
// });

// export const BookmarkLink = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("bookmarkLink", {
//       type: "Link",
//       args: {
//         id: stringArg(),
//       },
//       async resolve(_, args, ctx) {
//         const link = await ctx.prisma.link.findUnique({
//           where: { id: args.id },
//         });

//         await ctx.prisma.user.update({
//           where: {
//             email: ctx.user.email,
//           },
//           data: {
//             favorites: {
//               connect: {
//                 id: link.id,
//               },
//             },
//           },
//         });
//         return link;
//       },
//     });
//   },
// });
