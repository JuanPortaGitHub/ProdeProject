import { FieldResolver } from "nexus";
import { hashPassword } from "../../lib/auth";

export const getAllUsersResolver: FieldResolver<
  "Query",
  "GetAllUsers"
> = async (_parent, _args, ctx) => {
  try {
    return ctx.prisma.user.findMany();
  } catch {
    throw new Error("No se pudo obtener información. Reintente");
  }
};

export const getUserByIdResolver: FieldResolver<
  "Query",
  "GetUserById"
> = async (_parent, { id }, ctx) => {
  try {
    return await ctx.prisma.user.findFirst({ where: { id: id } });
  } catch {
    throw new Error("No se pudo obtener información. Reintente");
  }
};

export const getUserByEmailResolver: FieldResolver<
  "Query",
  "GetUserByEmail"
> = async (_parent, { email }, ctx) => {
  try {
    return await ctx.prisma.user.findUnique({ where: { email: email } });
  } catch {
    throw new Error("No se pudo obtener información. Reintente");
  }
};

export const createUserResolver: FieldResolver<
  "Mutation",
  "createUser"
> = async (_, { name, email, recivedPassword, image }, { prisma }) => {
  try {
    const mailExist = await prisma.user.count({
      where: {
        email: email.toLowerCase(),
      },
    });
    if (mailExist !== 0) {
      return new Error("Usuario Existente");
    }

    const password = await hashPassword(recivedPassword);

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: password,
        image: image,
      },
    });
    return newUser;
  } catch (e) {
    throw new Error("No se pudo obtener crear usuario. Reintente");
  }
};

export const updateUserResolver: FieldResolver<
  "Mutation",
  "updateUser"
> = async (_, { id, name, password }, { prisma }) => {
  try {
    const editedUser = await prisma.user.update({
      where: { id: id },
      data: {
        name: name != null ? name : undefined, // para que funcione como patch
        password: password != null ? password : undefined, // para que funcione como patch
      },
    });
    return editedUser;
  } catch {
    throw new Error("No se pudo actualizar usuario. Reintente");
  }
};
