import { FieldResolver } from "nexus";

export const createProdeUsuarioResolver: FieldResolver<
  "Mutation",
  "createProdeUsuario"
> = async (
  _,
  {
    userId,
    info_PartidosId,
    Goles_Local,
    Goles_Visitante,
    Ganador,
    Tiempo_Extra,
    Penales,
    Puntos,
  },
  { prisma }
) => {
  const newGroup = await prisma.prode_Partido_Usuario.create({
    data: {
      userId,
      info_PartidosId,
      Goles_Local,
      Goles_Visitante,
      Ganador,
      Tiempo_Extra,
      Penales,
      Puntos,
    },
  });
  return newGroup;
};

export const updateProdeUsuarioResolver: FieldResolver<
  "Mutation",
  "updateProdeUsuario"
> = async (
  _,
  {
    userId,
    info_PartidosId,
    Goles_Local,
    Goles_Visitante,
    Ganador,
    Tiempo_Extra,
    Penales,
    Puntos,
  },
  { prisma }
) => {
  const editedGroup = await prisma.prode_Partido_Usuario.update({
    where: {
      userId_info_PartidosId: {
        userId: userId,
        info_PartidosId: info_PartidosId,
      },
    },
    data: {
      Goles_Local: Goles_Local != null ? Goles_Local : undefined, // If null, do nothing,
      Goles_Visitante: Goles_Visitante != null ? Goles_Visitante : undefined, // If null, do nothing,
      Ganador: Ganador != null ? Ganador : undefined, // If null, do nothing,
      Tiempo_Extra: Tiempo_Extra != null ? Tiempo_Extra : undefined, // If null, do nothing,
      Penales: Penales != null ? Penales : undefined, // If null, do nothing,
      Puntos: Puntos != null ? Puntos : undefined, // If null, do nothing,
    },
  });
  return editedGroup;
};

export const getAllProdeUsuarioResolver: FieldResolver<
  "Query",
  "GetAllProdePartidoUsuarios"
> = async (_parent, _args, ctx) => {
  return ctx.prisma.prode_Partido_Usuario.findMany();
};

export const getProdeUsuarioByIdResolver: FieldResolver<
  "Query",
  "GetProdePartidoUsuarioById"
> = async (_parent, { userId, info_PartidosId }, ctx) => {
  return ctx.prisma.prode_Partido_Usuario.findFirst({
    where: {
      userId: Number(userId),
      info_PartidosId: Number(info_PartidosId),
    },
  });
};
