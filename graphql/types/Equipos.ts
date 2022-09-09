import { enumType, idArg, intArg, objectType, stringArg } from "nexus";
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
        return await ctx.prisma.equipos
          .findUnique({
            where: { id: parent.id || null || undefined },
          })
          .Info_Partidos();
      },
    });
  },
});

export const EquiposQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllEquipos", {
      type: Equipos,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.equipos.findMany();
      },
    });

    t.field("GetEquiposById", {
      type: Equipos,
      args: {
        id: idArg(),
      },
      resolve(_parent, { id }, ctx) {
        return ctx.prisma.user.findFirst({ where: { id: Number(id) } });
      },
    });
  },
});
