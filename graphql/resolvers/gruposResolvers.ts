import { FieldResolver } from "nexus";

export const getAllGruposResolver: FieldResolver<
  "Query",
  "GetAllGrupos"
> = async (_parent, _args, ctx) => {
  try {
    return await ctx.prisma.grupo.findMany();
  } catch {
    throw new Error("No se pudo obtener información, reintente");
  }
};

export const getGrupoByIdResolver: FieldResolver<
  "Query",
  "GetGrupoById"
> = async (_parent, { id }, ctx) => {
  try {
    return await ctx.prisma.grupo.findFirst({ where: { id: Number(id) } });
  } catch {
    throw new Error("No se pudo obtener información, reintente");
  }
};

export const createGrupoResolver: FieldResolver<
  "Mutation",
  "createGrupo"
> = async (
  _,
  { nombre, imagen, clave_grupo, slogan, monto, idUser },
  { prisma }
) => {
  try {
    const nombreGrupoExist = await prisma.grupo.count({
      where: {
        nombre: nombre,
      },
    });
    if (nombreGrupoExist !== 0) {
      return new Error("Ese nombre de grupo ya esta siendo utilizado");
    }
    const newGroup = await prisma.grupo.create({
      data: {
        nombre: nombre.toLowerCase(),
        imagen,
        clave_grupo: clave_grupo.toLowerCase(),
        slogan,
        monto,
        UsuariosDeGrupo: {
          connectOrCreate: {
            where: { id: idUser },
            create: { id: idUser },
          },
        },
      },
    });
    return newGroup;
  } catch {
    throw new Error("No fue posible crear grupo, reintente");
  }
};

export const updateGrupoResolver: FieldResolver<
  "Mutation",
  "updateGrupo"
> = async (
  _,
  { id, nombre, imagen, clave_grupo, slogan, monto },
  { prisma }
) => {
  try {
    if (nombre) {
      const nombreGrupoExist = await prisma.grupo.count({
        where: {
          nombre: nombre.toLowerCase(),
        },
      });
      if (nombreGrupoExist !== 0) {
        return new Error("Ese nombre de grupo ya esta siendo utilizado");
      }
    }
    const editedGroup = await prisma.grupo.update({
      where: { id: id },
      data: {
        nombre: nombre != null ? nombre.toLowerCase() : undefined, //para que funcione como patch
        imagen: imagen != null ? imagen : undefined, //para que funcione como patch
        clave_grupo:
          clave_grupo != null ? clave_grupo.toLowerCase() : undefined, //para que funcione como patch
        slogan: slogan != null ? slogan : undefined, //para que funcione como patch
        monto: monto != null ? monto : undefined, //para que funcione como patch
      },
    });
    return editedGroup;
  } catch (e) {
    throw new Error("No pudimos actualizar el grupo. Reintente");
  }
};

export const addUserToGrupo: FieldResolver<"Mutation", "updateGrupo"> = async (
  _,
  { nombre, clave_grupo, idUser },
  { prisma }
) => {
  try {
    if (nombre && clave_grupo && idUser) {
      const nombreGrupoExist = await prisma.grupo.count({
        where: {
          AND: [
            {
              nombre: { equals: nombre, mode: "insensitive" },
            },
            {
              clave_grupo: { equals: clave_grupo, mode: "insensitive" },
            },
          ],
        },
      });
      if (nombreGrupoExist === 0) {
        return new Error("No se encuentra el grupo o clave incorrecta");
      }
      const userExistInGroup = await prisma.grupo.count({
        where: {
          AND: [
            {
              nombre: { equals: nombre, mode: "insensitive" },
            },
            {
              UsuariosDeGrupo: { some: { id: idUser } },
            },
          ],
        },
      });
      if (userExistInGroup !== 0) {
        return new Error("Ya estás en este grupo!");
      }
      const editedGroup = await prisma.grupo.update({
        where: { nombre: nombre },
        data: {
          UsuariosDeGrupo: {
            connect: { id: idUser },
          },
        },
      });
      return editedGroup;
    }
  } catch (e) {
    throw new Error(e.message);
  }
};
