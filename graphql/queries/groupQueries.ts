import { gql } from "@apollo/client";

export const CREATE_GROUP = gql`
  mutation Mutation(
    $nombre: String!
    $imagen: String!
    $claveGrupo: String!
    $slogan: String!
    $monto: String!
    $idUser: String!
  ) {
    createGrupo(
      nombre: $nombre
      imagen: $imagen
      clave_grupo: $claveGrupo
      slogan: $slogan
      monto: $monto
      idUser: $idUser
    ) {
      id
      nombre
      slogan
    }
  }
`;

export const ADD_USER_GROUP = gql`
  mutation AddUserToGrupo(
    $nombre: String!
    $claveGrupo: String!
    $idUser: String!
  ) {
    addUserToGrupo(nombre: $nombre, clave_grupo: $claveGrupo, idUser: $idUser) {
      id
      nombre
    }
  }
`;

export const GET_GROUP_DETAIL = gql`
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

export const GET_RANKING_GROUP = gql`
  query GetRankingGroup($grupoId: Int!) {
    GetRankingGroup(grupoId: $grupoId) {
      PosicionesUsuarios {
        id
        imagenUsuario
        nombreUsuario
        sumaDePuntos
      }
      nombreGrupo
      montoGrupo
      sloganGrupo
      idGrupo
    }
  }
`;
