import { enumType, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { User } from "./User";
// import { Link } from "./Link";

// model Grupo {
//   id                 Int                  @id @default(autoincrement())
//   usuarios_en_grupo  User[]
//   nombre             String               @unique
//   imagen             String?
//   clave_grupo        String
//   Usuarios_Por_Grupo Usuarios_Por_Grupo[]
//   createdAt          DateTime             @default(now()) @db.Timestamptz(3)
//   updatedAt          DateTime             @updatedAt @db.Timestamptz(3)
// }

export const Grupo = objectType({
  name: "Grupo",
  definition(t) {
    t.id("id");
    t.string("nombre");
    t.string("imagen");
    t.string("clave_grupo");
    t.string("createdAt");
    t.string("updatedAt");
    // t.list.field("users", {
    //   type: User,
    //   async resolve(parent, _args, ctx) {
    //     return await ctx.prisma.grupo
    //       .findMany({
    //         where: {
    //           id: parent.id,
    //         },
    //       })

    //   },
    // });
  },
});

export const GruposQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("grupos", {
      type: "Grupo",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.grupo.findMany();
      },
    });
  },
});
