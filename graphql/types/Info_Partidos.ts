import { idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import {
  getAllProdeUserByGroupResolver,
  getMatchesByGroupResolver,
} from "../resolvers/partidosResolvers";
import { Equipos } from "./Equipos";
import { Prode_Partido_Usuario } from "./Prode_Partido_Usuario";
import { Resultados_Reales_Partidos } from "./Resultados_Reales_Partidos";

export const Info_Partidos = objectType({
  name: "Info_Partidos",
  definition(t) {
    t.int("id");
    t.int("idTorneo");
    t.string("RondaTorneo");
    t.string("Grupo");
    t.string("DiaHora");
    t.string("Lugar");
    t.string("equipoLocalId");
    t.string("equipoVisitanteId");
    t.string("createdAt");
    t.string("updatedAt");
    t.field("resultado", {
      type: Resultados_Reales_Partidos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.info_Partidos
          .findUnique({
            where: {
              id: parent.id || null || undefined,
            },
          })
          .Resultado();
      },
    });
    t.field("EquipoLocal", {
      type: Equipos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.equipos.findFirst({
          where: {
            id: Number(parent.equipoLocalId) || null || undefined,
          },
        });
      },
    });
    t.field("EquipoVisitante", {
      type: Equipos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.equipos.findFirst({
          where: {
            id: Number(parent.equipoVisitanteId) || null || undefined,
          },
        });
      },
    });
    t.field("Prode_Partido_Usuario", {
      type: Prode_Partido_Usuario,
      args: {
        userId: nonNull(stringArg()),
        grupoId: nonNull(intArg()),
      },
      async resolve(parent, args, ctx) {
        return await ctx.prisma.prode_Partido_Usuario.findFirst({
          where: {
            AND: [
              {
                info_PartidosId: Number(parent.id) || null || undefined,
              },
              { userId: args.userId || null || undefined },
              { grupoId: Number(args.grupoId) || null || undefined },
            ],
          },
        });
      },
    });
  },
});

export const InfoPartidos_Query = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllInfoPartidos", {
      type: Info_Partidos,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.info_Partidos.findMany();
      },
    });
    t.field("GetInfoPartidoById", {
      type: Info_Partidos,
      args: {
        id: idArg(),
      },
      resolve(_parent, { id }, ctx) {
        return ctx.prisma.info_Partidos.findFirst({
          where: { id: Number(id) },
        });
      },
    });
  },
});

export const GetMatchesByGroup = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetMatchesByGroup", {
      type: Info_Partidos,
      args: {
        Grupo: nonNull(stringArg()),
      },
      resolve: getMatchesByGroupResolver,
    });
  },
});
