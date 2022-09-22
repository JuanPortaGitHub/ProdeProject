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
