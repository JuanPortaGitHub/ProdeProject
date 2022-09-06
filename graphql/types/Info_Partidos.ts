import { enumType, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Equipos } from "./Equipos";
import { Prode_Partido_Usuario } from "./Prode_Partido_Usuario";
import { Resultados_Reales_Partidos } from "./Resultados_Reales_Partidos";
import { User } from "./User";

// model Info_Partidos {
//   id                           Int                        @id @default(autoincrement())
//   Equipos                      Equipos[]
//   DiaHora                      DateTime
//   Lugar                        String
//   Resultado                    Resultados_Reales_Partidos @relation(fields: [resultados_Reales_PartidosId], references: [id])
//   resultados_Reales_PartidosId Int                        @unique
//   Prode_Usuario                Prode_Usuario[]
//   createdAt                    DateTime                   @default(now()) @db.Timestamptz(3)
//   updatedAt                    DateTime                   @updatedAt @db.Timestamptz(3)
// }

export const Info_Partidos = objectType({
  name: "Info_Partidos",
  definition(t) {
    t.int("id");
    t.string("DiaHora");
    t.string("Lugar");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("resultado", {
      type: Resultados_Reales_Partidos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.resultados_Reales_Partidos
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .Info_Partidos();
      },
    });
    t.list.field("equipos", {
      type: Equipos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.equipos
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .Info_Partidos();
      },
    });
    t.list.field("Prode_Partido_Usuario", {
      type: Prode_Partido_Usuario,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.Prode_Partido_Usuario.findUnique({
          where: {
            info_PartidosId: parent.id,
          },
        }).Partido();
      },
    });
  },
});

export const InfoPartidos_Query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("info_partidos", {
      type: "Info_Partidos",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.info_Partidos.findMany();
      },
    });
  },
});
