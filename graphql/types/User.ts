import { enumType, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Grupo } from "./Grupo";
import { Prode_Partido_Usuario } from "./Prode_Partido_Usuario";
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
        const prodepartidos = await ctx.prisma.prode_Partido_Usuario.findMany({
          where: {
            userId: parent.id,
          },
        });
        prodepartidos.map((prodePartido) => {
          prodePartido.Tiempo_Extra;
        });
      },
    });
  },
});

export const UsersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("user", {
      type: "User",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});
