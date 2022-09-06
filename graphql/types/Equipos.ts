import { enumType, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Info_Partidos } from "./Info_Partidos";

// model Equipos {
//   id              Int            @id @default(autoincrement())
//   nombre_equipo   String
//   Info_Partidos   Info_Partidos? @relation(fields: [info_PartidosId], references: [id])
//   info_PartidosId Int?
//   createdAt       DateTime       @default(now()) @db.Timestamptz(3)
//   updatedAt       DateTime       @updatedAt @db.Timestamptz(3)
// }

export const Equipos = objectType({
  name: "Equipos",
  definition(t) {
    t.int("id");
    t.string("nombre_equipo");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("partidos", {
      type: Info_Partidos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.info_Partidos.findMany({
          where: {
            id: parent.id,
          },
        });
      },
    });
  },
});

export const EquiposQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("equipo", {
      type: "Equipos",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.equipos.findMany();
      },
    });
  },
});
