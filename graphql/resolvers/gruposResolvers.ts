import { FieldResolver } from "nexus";

export const createGrupoResolver: FieldResolver<
  "Mutation",
  "createGrupo"
> = async (_, { nombre, imagen, clave_grupo }, { prisma }) => {
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
  const editedGroup = await prisma.grupo.update({
    where: { id: id },
    data: {
      nombre: nombre != null ? nombre : undefined, // If null, do nothing
      imagen: imagen != null ? imagen : undefined, // If null, do nothing
      clave_grupo: clave_grupo != null ? clave_grupo : undefined, // If null, do nothing
    },
  });
  return editedGroup;
};

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
