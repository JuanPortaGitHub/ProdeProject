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

export const getRankingGroupResolver: FieldResolver<
  "Query",
  "Prode_Partido_Usuario"
> = async (_parent, { grupoId }, ctx) => {
  const groupInfo = await ctx.prisma.grupo.findFirst({
    where: {
      id: Number(grupoId) || null || undefined,
    },
  });

  const usersInGroup = await ctx.prisma.grupo
    .findFirst({
      where: {
        id: Number(grupoId) || null || undefined,
      },
    })
    .UsuariosDeGrupo();

  const obtenerSumaPuntos = async (user) => {
    return await ctx.prisma.prode_Partido_Usuario.aggregate({
      _sum: { Puntos: true },
      where: {
        AND: [
          { userId: user.id || null || undefined },
          { grupoId: Number(grupoId) || null || undefined },
        ],
      },
    });
  };

  const unrankedUsers = await Promise.all(
    usersInGroup.map(async (user) => {
      const sumaPuntosUsuario = await obtenerSumaPuntos(user);

      return {
        id: user.id,
        nombreUsuario: user.name,
        imagenUsuario: user.image,
        sumaDePuntos: sumaPuntosUsuario._sum.Puntos || 0,
      };
    })
  );

  return {
    idGrupo: groupInfo?.id,
    nombreGrupo: groupInfo?.nombre,
    sloganGrupo: groupInfo?.slogan,
    montoGrupo: groupInfo?.monto,
    PosicionesUsuarios: unrankedUsers.sort(
      (a, b) => b.sumaDePuntos - a.sumaDePuntos
    ),
  };
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
    throw new Error("No se pudo actualizar");
  }
};

export const createManyProdeUsuarioResolver: FieldResolver<
  "Mutation",
  "createManyProdeUsuario"
> = async (_, { userId, grupoId, ProdeMatchInfo }, { prisma }) => {
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
        Puntos: undefined,
      },
    });
    return { message: "Prode Creado Correctamete", error: false };
  });
  return { message: "Prode Cargado Correctamete", error: false };
};
