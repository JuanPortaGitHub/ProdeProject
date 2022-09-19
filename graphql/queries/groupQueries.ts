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
