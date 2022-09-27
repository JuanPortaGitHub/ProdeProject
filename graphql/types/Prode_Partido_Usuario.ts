import {
  booleanArg,
  idArg,
  intArg,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { extendType } from "nexus";
import {
  createProdeUsuarioResolver,
  getAllProdeUserByGroupResolver,
  getAllProdeUsuarioResolver,
  getProdeUsuarioByIdResolver,
  updateProdeUsuarioResolver,
} from "../resolvers/prodesUsuariosResolvers";
import { Info_Partidos } from "./Info_Partidos";

export const Prode_Partido_Usuario = objectType({
  name: "Prode_Partido_Usuario",
  definition(t) {
    t.id("userId");
    t.id("info_PartidosId");
    t.id("grupoId");
    t.string("Goles_Local");
    t.string("Goles_Visitante");
    t.string("Ganador");
    t.boolean("Tiempo_Extra");
    t.boolean("Penales");
    t.int("Puntos");
    t.string("createdAt");
    t.string("updatedAt");
    t.field("InfoPartido", {
      type: Info_Partidos,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.prode_Partido_Usuario
          .findFirst({
            where: {
              AND: [
                {
                  info_PartidosId:
                    Number(parent.info_PartidosId) || null || undefined,
                },
                { userId: parent.userId || null || undefined },
                { grupoId: Number(parent.grupoId) || null || undefined },
              ],
            },
          })
          .Partido();
      },
    });
  },
});

export const CreateProdeUsuario = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createProdeUsuario", {
      type: Prode_Partido_Usuario,
      args: {
        userId: nonNull(stringArg()),
        info_PartidosId: nonNull(intArg()),
        grupoId: nonNull(intArg()),
        Goles_Local: nonNull(stringArg()),
        Goles_Visitante: nonNull(stringArg()),
        Ganador: nonNull(stringArg()),
        Tiempo_Extra: nonNull(booleanArg()),
        Penales: nonNull(booleanArg()),
        Puntos: nonNull(intArg()),
      },
      resolve: createProdeUsuarioResolver,
    });
  },
});

export const UpdateProdeUsuario = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("updateProdeUsuario", {
      type: Prode_Partido_Usuario,
      args: {
        userId: nonNull(stringArg()),
        info_PartidosId: nonNull(intArg()),
        grupoId: nonNull(intArg()),
        Goles_Local: stringArg(),
        Goles_Visitante: stringArg(),
        Ganador: stringArg(),
        Tiempo_Extra: booleanArg(),
        Penales: booleanArg(),
        Puntos: intArg(),
      },
      resolve: updateProdeUsuarioResolver,
    });
  },
});

export const GetAllProdePartidoUsuarios = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllProdePartidoUsuarios", {
      type: Prode_Partido_Usuario,
      resolve: getAllProdeUsuarioResolver,
    });
  },
});

export const GetProdePartidoUsuarioById = extendType({
  type: "Query",
  definition(t) {
    t.field("GetProdePartidoUsuarioById", {
      type: Prode_Partido_Usuario,
      args: {
        userId: nonNull(stringArg()),
        info_PartidosId: nonNull(idArg()),
        grupoId: nonNull(intArg()),
      },
      resolve: getProdeUsuarioByIdResolver,
    });
  },
});

export const GetAllProdeUserByGroup = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllProdeUserByGroup", {
      type: Prode_Partido_Usuario,
      args: {
        userId: nonNull(stringArg()),
        grupoPartido: nonNull(stringArg()),
        grupoId: nonNull(intArg()),
      },
      resolve: getAllProdeUserByGroupResolver,
    });
  },
});
