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

export const GET_PRODE_BY_USER_AND_GROUP = gql`
  query GetGrupoById($getGrupoByIdId: ID!) {
    GetGrupoById(id: $getGrupoByIdId) {
      id
      nombre
      slogan
      monto
      imagen
      clave_grupo
      usuarios {
        id
        name
        image
      }
    }
  }
`;
