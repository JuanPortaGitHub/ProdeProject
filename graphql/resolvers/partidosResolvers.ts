import { FieldResolver } from "nexus";

export const getMatchesByGroupResolver: FieldResolver<
  "Query",
  "GetGroupedMatches"
> = async (_parent, { Grupo }, ctx) => {
  return await ctx.prisma.info_Partidos.findMany({ where: { Grupo: Grupo } });
};
