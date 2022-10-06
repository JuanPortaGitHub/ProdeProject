import { FieldResolver } from "nexus";

export const getAllProdeUsuarioResolver: FieldResolver<
  "Query",
  "GetAllProdePartidoUsuarios"
> = async (_parent, _args, ctx) => {
  try {
    return ctx.prisma.prode_Partido_Usuario.findMany();
  } catch (e) {
    throw new Error("No se pudo obetener la información");
  }
};

export const getProdeUsuarioByIdResolver: FieldResolver<
  "Query",
  "GetProdePartidoUsuarioById"
> = async (_parent, { userId, info_PartidosId, grupoId }, ctx) => {
  try {
    return ctx.prisma.prode_Partido_Usuario.findFirst({
      where: {
        userId: userId,
        info_PartidosId: Number(info_PartidosId),
        grupoId: Number(grupoId),
      },
    });
  } catch (e) {
    throw new Error("No se pudo obtener la información");
  }
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
  try {
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
  } catch (e) {
    throw new Error("No se pudo crear prode, reintente");
  }
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
  try {
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
  } catch {
    throw new Error("No se pudo obtener la información");
  }
};

export const createManyProdeUsuarioResolver: FieldResolver<
  "Mutation",
  "createManyProdeUsuario"
> = async (_, { userId, grupoId, ProdeMatchInfo }, { prisma }) => {
  try {
    console.log(userId, grupoId, ProdeMatchInfo);
    if (ProdeMatchInfo?.length !== 6) {
      return {
        message: "Prode incompleto. Faltan cargar partidos",
        error: true,
      };
    }

    ProdeMatchInfo.map(async (prode: any) => {
      const prodeCargado = await prisma.prode_Partido_Usuario.findFirst({
        where: {
          userId: userId,
          grupoId: grupoId,
          info_PartidosId: prode.info_PartidosId,
        },
      });
      if (prodeCargado?.Goles_Local) {
        await prisma.prode_Partido_Usuario.updateMany({
          where: {
            userId: userId,
            grupoId: grupoId,
            info_PartidosId: prode.info_PartidosId,
          },
          data: {
            Goles_Local: prode.Goles_Local,
            Goles_Visitante: prode.Goles_Visitante,
            Ganador: prode.Ganador,
            Tiempo_Extra: prode.Tiempo_Extra,
            Penales: prode.Penales,
          },
        });
        return { message: "Prode Actualizado Correctamete", error: false };
      }
      await prisma.prode_Partido_Usuario.create({
        data: {
          userId: userId,
          grupoId: grupoId,
          info_PartidosId: prode.info_PartidosId,
          Goles_Local: prode.Goles_Local,
          Goles_Visitante: prode.Goles_Visitante,
          Ganador: prode.Ganador,
          Puntos: 0,
        },
      });
      return { message: "Prode Creado Correctamete", error: false };
    });
  } catch (e) {
    return { message: "Error en carga de prode. Reintente", error: true };
  }
  return { message: "Prode Cargado Correctamete", error: false };
};
