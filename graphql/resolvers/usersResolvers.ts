import { FieldResolver } from "nexus";

export const createUserResolver: FieldResolver<
  "Mutation",
  "createUser"
> = async (_, { name, apellido, mail, password }, { prisma }) => {
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
> = async (_, { id, name, apellido, mail, password }, { prisma }) => {
  const editedUser = await prisma.user.update({
    where: { id: id },
    data: {
      name: name != null ? name : undefined, // If null, do nothing
      apellido: apellido != null ? apellido : undefined, // If null, do nothing
      mail: mail != null ? mail : undefined, // If null, do nothing
      password: password != null ? password : undefined, // If null, do nothing
    },
  });
  return editedUser;
};

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
