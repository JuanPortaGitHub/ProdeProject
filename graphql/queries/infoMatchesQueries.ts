import { gql } from "@apollo/client";

export const GET_FASE_GROUP_MATCHES = gql`
  query Query {
    GetAllInfoPartidos {
      id
      Grupo
      DiaHora
      Lugar
      EquipoLocal {
        nombre_equipo
      }
      EquipoVisitante {
        nombre_equipo
      }
    }
  }
`;

export const GET_MATCHES_BY_GROUP = gql`
  query GetMatchesByGroup($grupo: String!) {
    GetMatchesByGroup(Grupo: $grupo) {
      Grupo
      DiaHora
      Lugar
      id
      EquipoLocal {
        nombre_equipo
      }
      EquipoVisitante {
        nombre_equipo
      }
    }
  }
`;
