import {
  booleanArg,
  idArg,
  inputObjectType,
  intArg,
  list,
  nonNull,
  objectType,
  stringArg,
} from "nexus";
import { extendType } from "nexus";
import {
  createManyProdeUsuarioResolver,
  createProdeUsuarioResolver,
  getAllProdeUsuarioResolver,
  getPointByUserAndGroupResolver,
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

export const CreateManyProdeUsuario = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createManyProdeUsuario", {
      type: ProdeResponse,
      args: {
        userId: nonNull(stringArg()),
        grupoId: nonNull(intArg()),
        ProdeMatchInfo: list(nonNull(ProdeMatchInfo)),
      },
      resolve: createManyProdeUsuarioResolver,
    });
  },
});

const ProdeMatchInfo = inputObjectType({
  name: "prodeMatchInfo",
  definition: (t) => {
    t.nonNull.int("info_PartidosId");
    t.nonNull.string("Goles_Local");
    t.nonNull.string("Goles_Visitante");
    t.nonNull.string("Ganador");
    t.nonNull.boolean("Tiempo_Extra");
    t.nonNull.boolean("Penales");
  },
});

const ProdeResponse = objectType({
  name: "prodeResponse",
  definition: (t) => {
    t.nonNull.string("message");
    t.nonNull.boolean("error");
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

export const GetPointByUserAndGroup = extendType({
  type: "Query",
  definition(t) {
    t.field("GetPointByUserAndGroup", {
      type: RankingGrupo,
      args: {
        userId: nonNull(stringArg()),
        grupoId: nonNull(intArg()),
      },
      resolve: getPointByUserAndGroupResolver,
    });
  },
});

const PosicionUsuario = objectType({
  name: "PosicionUsuario",
  definition(t) {
    t.string("id");
    t.string("nombreUsuario");
    t.string("imagenUsuario");
    t.int("sumaDePuntos");
  },
});

const RankingGrupo = objectType({
  name: "RankingGrupo",
  definition(t) {
    t.string("idGrupo");
    t.string("nombreGrupo");
    t.string("sloganGrupo");
    t.int("montoGrupo");
    t.list.field("PosicionesUsuarios", { type: PosicionUsuario });
  },
});
