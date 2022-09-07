import { enumType, intArg, nonNull, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { User } from "./User";
import { Vehicle } from "./Vehicle";
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

export const Owner = objectType({
  name: "Owner",
  definition: (t) => {
    t.nonNull.int("id");
    t.nonNull.string("firstname");
    t.nonNull.string("lastname");
    t.nonNull.string("email");
    t.list.field("vehicle", {
      type: "Vehicle",
      resolve: (parent, args, context, info) => {
        return context.prisma.owner
          .findUnique({
            where: { id: parent.id },
          })
          .vehicles();
      },
    });
  },
});

export const OwnersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("getOwners", {
      type: "Owner",
      resolve(parent, args, context, info) {
        return context.prisma.owner.findMany();
      },
    });
    t.field("getOwnerById", {
      type: "Owner",
      args: {
        id: nonNull(intArg()),
      },
      resolve(parent, args, context, info) {
        var owner = context.prisma.owner.findFirst({
          where: {
            id: args.id,
          },
        });

        return owner;
      },
    });
  },
});
