import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation Mutation(
    $name: String!
    $email: String!
    $recivedPassword: String!
  ) {
    createUser(name: $name, email: $email, recivedPassword: $recivedPassword) {
      id
    }
  }
`;
