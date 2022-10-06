import { FieldResolver } from "nexus";

export const getMatchesByGroupResolver: FieldResolver<
  "Query",
  "GetGroupedMatches"
> = async (_parent, { Grupo }, ctx) => {
  try {
    return await ctx.prisma.info_Partidos.findMany({ where: { Grupo: Grupo } });
  } catch {
    throw new Error("No se pudo obtener la información. Reintente");
  }
};
