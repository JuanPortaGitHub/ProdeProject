import { enumType, idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import {
  createUserResolver,
  getAllUsersResolver,
  getUserByIdResolver,
  updateUserResolver,
} from "../resolvers/usersResolvers";
import { Grupo } from "./Grupo";
import { Prode_Partido_Usuario } from "./Prode_Partido_Usuario";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("mail");
    t.string("name");
    t.string("apellido");
    t.string("password");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("Grupos", {
      type: Grupo,
      resolve: (parent, args, context) => {
        return context.prisma.user
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .GruposDeUsuario();
      },
    });
    t.list.field("Prode_Usuario", {
      type: Prode_Partido_Usuario,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: { id: Number(parent.id) || undefined },
          })
          .Prode_Partido_Usuario();
      },
    });
  },
});

export const CreateUser = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createUser", {
      type: User,
      args: {
        name: nonNull(stringArg()),
        apellido: nonNull(stringArg()),
        mail: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: createUserResolver,
    });
  },
});

export const UpdateUser = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("updateUser", {
      type: User,
      args: {
        id: nonNull(intArg()),
        name: stringArg(),
        apellido: stringArg(),
        mail: stringArg(),
        password: stringArg(),
      },
      resolve: updateUserResolver,
    });
  },
});

export const GetAllUsers = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllUsers", {
      type: User,
      resolve: getAllUsersResolver,
    });
  },
});

export const GetUserById = extendType({
  type: "Query",
  definition(t) {
    t.field("GetUserById", {
      type: User,
      args: {
        id: idArg(),
      },
      resolve: getUserByIdResolver,
    });
  },
});
