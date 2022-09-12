import { FieldResolver } from "nexus";

export const getAllUsersResolver: FieldResolver<
  "Query",
  "GetAllUsers"
> = async (_parent, _args, ctx) => {
  return ctx.prisma.user.findMany();
};

export const getUserByIdResolver: FieldResolver<
  "Query",
  "GetUserById"
> = async (_parent, { id }, ctx) => {
  return await ctx.prisma.user.findFirst({ where: { id: Number(id) } });
};

export const createUserResolver: FieldResolver<
  "Mutation",
  "createUser"
> = async (_, { name, apellido, mail, password }, { prisma }) => {
  const mailExist = await prisma.user.count({
    where: {
      mail: mail,
    },
  });
  if (mailExist !== 0) {
    throw new Error("Usuario Existente");
  }
  const newUser = await prisma.user.create({
    data: {
      name,
      apellido,
      mail,
      password,
    },
  });
  return newUser;
};

export const updateUserResolver: FieldResolver<
  "Mutation",
  "updateUser"
> = async (_, { id, name, apellido, password }, { prisma }) => {
  const editedUser = await prisma.user.update({
    where: { id: id },
    data: {
      name: name != null ? name : undefined, // para que funcione como patch
      apellido: apellido != null ? apellido : undefined, // para que funcione como patch
      password: password != null ? password : undefined, // para que funcione como patch
    },
  });
  return editedUser;
};
