import { FieldResolver } from "nexus";

export const getAllGruposResolver: FieldResolver<
  "Query",
  "GetAllGrupos"
> = async (_parent, _args, ctx) => {
  return await ctx.prisma.grupo.findMany();
};

export const getGrupoByIdResolver: FieldResolver<
  "Query",
  "GetGrupoById"
> = async (_parent, { id }, ctx) => {
  console.log("el id grupo", id);
  return await ctx.prisma.grupo.findFirst({ where: { id: Number(id) } });
};

export const createGrupoResolver: FieldResolver<
  "Mutation",
  "createGrupo"
> = async (
  _,
  { nombre, imagen, clave_grupo, slogan, monto, idUser },
  { prisma }
) => {
  const nombreGrupoExist = await prisma.grupo.count({
    where: {
      nombre: nombre,
    },
  });
  if (nombreGrupoExist !== 0) {
    throw new Error("Ese nombre de grupo ya esta siendo utilizado");
  }
  const newGroup = await prisma.grupo.create({
    data: {
      nombre: nombre.toUpperCase(),
      imagen,
      clave_grupo: clave_grupo.toUpperCase(),
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
};

export const updateGrupoResolver: FieldResolver<
  "Mutation",
  "updateGrupo"
> = async (
  _,
  { id, nombre, imagen, clave_grupo, slogan, monto },
  { prisma }
) => {
  if (nombre) {
    const nombreGrupoExist = await prisma.grupo.count({
      where: {
        nombre: nombre.toUpperCase(),
      },
    });
    if (nombreGrupoExist !== 0) {
      throw new Error("Ese nombre de grupo ya esta siendo utilizado");
    }
  }
  const editedGroup = await prisma.grupo.update({
    where: { id: id },
    data: {
      nombre: nombre != null ? nombre.toUpperCase() : undefined, //para que funcione como patch
      imagen: imagen != null ? imagen : undefined, //para que funcione como patch
      clave_grupo: clave_grupo != null ? clave_grupo.toUpperCase() : undefined, //para que funcione como patch
      slogan: slogan != null ? slogan : undefined, //para que funcione como patch
      monto: monto != null ? monto : undefined, //para que funcione como patch
    },
  });
  return editedGroup;
};

export const addUserToGrupo: FieldResolver<"Mutation", "updateGrupo"> = async (
  _,
  { nombre, clave_grupo, idUser },
  { prisma }
) => {
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
      throw new Error("No se encuentra el grupo o clave incorrecta");
    }
    console.log("iddddd USERRR", idUser);
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
      throw new Error("Ya estás en este grupo!");
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
  throw new Error("Faltan campos para poder agregar usuario a grupo");
};
