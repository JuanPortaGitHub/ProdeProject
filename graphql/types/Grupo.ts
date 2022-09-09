import { enumType, idArg, intArg, objectType, stringArg } from "nexus";
import { extendType } from "nexus";
import { User } from "./User";

export const Grupo = objectType({
  name: "Grupo",
  definition(t) {
    t.id("id");
    t.string("nombre");
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

export const GruposQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("GetAllGrupos", {
      type: Grupo,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.grupo.findMany();
      },
    });
    t.field("GetGrupoById", {
      type: Grupo,
      args: {
        id: idArg(),
      },
      resolve(_parent, { id }, ctx) {
        return ctx.prisma.grupo.findFirst({ where: { id: Number(id) } });
      },
    });
  },
});
