import { idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import {
  createUserResolver,
  getAllUsersResolver,
  getUserByEmailResolver,
  getUserByIdResolver,
  updateUserResolver,
} from "../resolvers/usersResolvers";
import { Grupo } from "./Grupo";
import { Prode_Partido_Usuario } from "./Prode_Partido_Usuario";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("email");
    t.string("name");
    t.string("password");
    t.string("createdAt");
    t.string("updatedAt");
    t.string("image");
    t.list.field("Grupos", {
      type: Grupo,
      resolve: (parent, args, context) => {
        return context.prisma.user
          .findUnique({
            where: { id: parent.id },
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
        email: nonNull(stringArg()),
        recivedPassword: nonNull(stringArg()),
        image: nonNull(stringArg()),
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

export const GetUserByEmail = extendType({
  type: "Query",
  definition(t) {
    t.field("GetUserByEmail", {
      type: User,
      args: {
        email: stringArg(),
      },
      resolve: getUserByEmailResolver,
    });
  },
});
