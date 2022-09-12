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
  return await ctx.prisma.grupo.findFirst({ where: { id: Number(id) } });
};

export const createGrupoResolver: FieldResolver<
  "Mutation",
  "createGrupo"
> = async (_, { nombre, imagen, clave_grupo }, { prisma }) => {
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
      nombre,
      imagen,
      clave_grupo,
    },
  });
  return newGroup;
};

export const updateGrupoResolver: FieldResolver<
  "Mutation",
  "updateGrupo"
> = async (_, { id, nombre, imagen, clave_grupo }, { prisma }) => {
  if (nombre) {
    const nombreGrupoExist = await prisma.grupo.count({
      where: {
        nombre: nombre,
      },
    });
    if (nombreGrupoExist !== 0) {
      throw new Error("Ese nombre de grupo ya esta siendo utilizado");
    }
  }
  const editedGroup = await prisma.grupo.update({
    where: { id: id },
    data: {
      nombre: nombre != null ? nombre : undefined, //para que funcione como patch
      imagen: imagen != null ? imagen : undefined, //para que funcione como patch
      clave_grupo: clave_grupo != null ? clave_grupo : undefined, //para que funcione como patch
    },
  });
  return editedGroup;
};
