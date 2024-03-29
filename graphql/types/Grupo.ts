import { idArg, intArg, nonNull, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import {
  addUserToGrupo,
  createGrupoResolver,
  getAllGruposResolver,
  getGrupoByIdResolver,
  updateGrupoResolver,
} from "../resolvers/gruposResolvers";
import { User } from "./User";

export const Grupo = objectType({
  name: "Grupo",
  definition(t) {
    t.id("id");
    t.string("nombre");
    t.string("slogan");
    t.string("monto");
    t.string("imagen");
    t.string("clave_grupo");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("usuarios", {
      type: User,
      resolve: (parent, args, context) => {
        return context.prisma.grupo
          .findUnique({
            where: { id: Number(parent.id) },
          })
          .UsuariosDeGrupo();
      },
    });
  },
});

export const CreateGrupo = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createGrupo", {
      type: Grupo,
      args: {
        nombre: nonNull(stringArg()),
        imagen: nonNull(stringArg()),
        clave_grupo: nonNull(stringArg()),
        slogan: nonNull(stringArg()),
        monto: nonNull(stringArg()),
        idUser: nonNull(stringArg()),
      },
      resolve: createGrupoResolver,
    });
  },
});

export const UpdateGrupo = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("updateGrupo", {
      type: Grupo,
      args: {
        id: nonNull(intArg()),
        nombre: stringArg(),
        imagen: stringArg(),
        clave_grupo: stringArg(),
        slogan: stringArg(),
        monto: stringArg(),
      },
      resolve: updateGrupoResolver,
    });
  },
});

export const AddUserToGrupo = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("addUserToGrupo", {
      type: Grupo,
      args: {
        nombre: nonNull(stringArg()),
        clave_grupo: nonNull(stringArg()),
        idUser: nonNull(stringArg()),
      },
      resolve: addUserToGrupo,
    });
  },
});

export const GetAllGrupos = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllGrupos", {
      type: Grupo,
      resolve: getAllGruposResolver,
    });
  },
});

export const GetGrupoById = extendType({
  type: "Query",
  definition(t) {
    t.field("GetGrupoById", {
      type: Grupo,
      args: {
        id: nonNull(idArg()),
      },
      resolve: getGrupoByIdResolver,
    });
  },
});
