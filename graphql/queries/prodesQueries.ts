import { gql } from "@apollo/client";

export const CREATE_PRODES = gql`
  mutation Mutation(
    $userId: String!
    $grupoId: Int!
    $prodeMatchInfo: [prodeMatchInfo!]
  ) {
    createManyProdeUsuario(
      userId: $userId
      grupoId: $grupoId
      ProdeMatchInfo: $prodeMatchInfo
    ) {
      message
      error
    }
  }
`;

export const GET_USERS_AND_POINTS = gql`
  query GetUsersAndPointsByMatch($infoPartidosId: ID!, $grupoId: Int!) {
    GetUsersAndPointsByMatch(
      info_PartidosId: $infoPartidosId
      grupoId: $grupoId
    ) {
      Puntos
      Usuario {
        id
        image
        name
      }
    }
  }
`;
