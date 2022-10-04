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

export const GET_MATCHES_BY_GROUPFASE_GROUP = gql`
  query GetMatchesByGroup($grupo: String!, $userId: String!, $grupoId: Int!) {
    GetMatchesByGroup(Grupo: $grupo) {
      id
      Grupo
      DiaHora
      Lugar
      RondaTorneo
      EquipoLocal {
        nombre_equipo
      }
      EquipoVisitante {
        nombre_equipo
      }
      Prode_Partido_Usuario(userId: $userId, grupoId: $grupoId) {
        userId
        grupoId
        Goles_Local
        Goles_Visitante
        Ganador
        info_PartidosId
      }
    }
  }
`;
