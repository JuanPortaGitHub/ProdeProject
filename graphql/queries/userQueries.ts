import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation(
    $name: String!
    $email: String!
    $recivedPassword: String!
    $image: String!
  ) {
    createUser(
      name: $name
      email: $email
      recivedPassword: $recivedPassword
      image: $image
    ) {
      id
    }
  }
`;

export const GET_USER_GROUPS = gql`
  query Query($getUserByIdId: ID) {
    GetUserById(id: $getUserByIdId) {
      id
      name
      Grupos {
        id
        nombre
        imagen
      }
    }
  }
`;

export const GET_USER_INFO = gql`
  query Query($getUserByIdId: ID) {
    GetUserById(id: $getUserByIdId) {
      id
      name
      image
    }
  }
`;
