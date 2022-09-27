import { FieldResolver } from "nexus";

export const getAllProdeUsuarioResolver: FieldResolver<
  "Query",
  "GetAllProdePartidoUsuarios"
> = async (_parent, _args, ctx) => {
  return ctx.prisma.prode_Partido_Usuario.findMany();
};

export const getProdeUsuarioByIdResolver: FieldResolver<
  "Query",
  "GetProdePartidoUsuarioById"
> = async (_parent, { userId, info_PartidosId, grupoId }, ctx) => {
  return ctx.prisma.prode_Partido_Usuario.findFirst({
    where: {
      userId: userId,
      info_PartidosId: Number(info_PartidosId),
      grupoId: Number(grupoId),
    },
  });
};

export const createProdeUsuarioResolver: FieldResolver<
  "Mutation",
  "createProdeUsuario"
> = async (
  _,
  {
    userId,
    info_PartidosId,
    grupoId,
    Goles_Local,
    Goles_Visitante,
    Ganador,
    Tiempo_Extra,
    Penales,
    Puntos,
  },
  { prisma }
) => {
  const prodeExist = await prisma.prode_Partido_Usuario.count({
    where: {
      userId: userId,
      info_PartidosId: info_PartidosId,
      grupoId: grupoId,
    },
  });
  if (prodeExist !== 0) {
    throw new Error("Ya cargaste el resultado de este partido");
  }
  const newProde = await prisma.prode_Partido_Usuario.create({
    data: {
      userId,
      info_PartidosId,
      grupoId,
      Goles_Local,
      Goles_Visitante,
      Ganador,
      Tiempo_Extra,
      Penales,
      Puntos,
    },
  });
  return newProde;
};

export const updateProdeUsuarioResolver: FieldResolver<
  "Mutation",
  "updateProdeUsuario"
> = async (
  _,
  {
    userId,
    info_PartidosId,
    grupoId,
    Goles_Local,
    Goles_Visitante,
    Ganador,
    Tiempo_Extra,
    Penales,
    Puntos,
  },
  { prisma }
) => {
  const editedProde = await prisma.prode_Partido_Usuario.update({
    where: {
      userId_info_PartidosId: {
        userId: userId,
        info_PartidosId: info_PartidosId,
        grupoId: grupoId,
      },
    },
    data: {
      Goles_Local: Goles_Local != null ? Goles_Local : undefined,
      Goles_Visitante: Goles_Visitante != null ? Goles_Visitante : undefined, // para que funcione como patch
      Ganador: Ganador != null ? Ganador : undefined, // para que funcione como patch
      Tiempo_Extra: Tiempo_Extra != null ? Tiempo_Extra : undefined, // para que funcione como patch
      Penales: Penales != null ? Penales : undefined, // para que funcione como patch
      Puntos: Puntos != null ? Puntos : undefined, // para que funcione como patch
    },
  });
  return editedProde;
};
