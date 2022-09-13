import { enumType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { Info_Partidos } from "./Info_Partidos";

export const Equipos = objectType({
  name: "Equipos",
  definition(t) {
    t.int("id");
    t.string("nombre_equipo");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("partidosLocal", {
      type: Info_Partidos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.equipos
          .findUnique({
            where: { id: parent.id || null || undefined },
          })
          .InfoPartidosLocal();
      },
    });
    t.list.field("partidosVisitante", {
      type: Info_Partidos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.equipos
          .findUnique({
            where: { id: parent.id || null || undefined },
          })
          .InfoPartidosVisitante();
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
        return ctx.prisma.equipos.findFirst({ where: { id: Number(id) } });
      },
    });
  },
});
