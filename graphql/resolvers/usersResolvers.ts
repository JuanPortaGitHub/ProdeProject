import { FieldResolver } from "nexus";
import { hashPassword } from "../../lib/auth";

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
  return await ctx.prisma.user.findFirst({ where: { id: id } });
};

export const getUserByEmailResolver: FieldResolver<
  "Query",
  "GetUserByEmail"
> = async (_parent, { email }, ctx) => {
  return await ctx.prisma.user.findUnique({ where: { email: email } });
};

export const createUserResolver: FieldResolver<
  "Mutation",
  "createUser"
> = async (_, { name, email, recivedPassword }, { prisma }) => {
  const mailExist = await prisma.user.count({
    where: {
      email: email,
    },
  });
  if (mailExist !== 0) {
    throw new Error("Usuario Existente");
  }

  const password = await hashPassword(recivedPassword);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return newUser;
};

export const updateUserResolver: FieldResolver<
  "Mutation",
  "updateUser"
> = async (_, { id, name, password }, { prisma }) => {
  const editedUser = await prisma.user.update({
    where: { id: id },
    data: {
      name: name != null ? name : undefined, // para que funcione como patch
      password: password != null ? password : undefined, // para que funcione como patch
    },
  });
  return editedUser;
};
