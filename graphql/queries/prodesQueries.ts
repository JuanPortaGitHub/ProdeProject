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

// const [Create_Prodes, { data, loading, error }] = useMutation(CREATE_PRODES, {
//   onCompleted(data) {
//     console.log("data", data);
//   },
//   onError(error) {},
// });
// async function submitHandler(event: { preventDefault: () => void }) {
//   event.preventDefault();

//   Create_Prodes({
//     variables: {
//       userId: groupName.current.value,
//       grupoId: groupPassword.current.value,
//       ProdeMatchInfo: ACA VA EL ARRAY DE OBJETOS,
//     },
//   });
// }

//EJEMPLO DE PRODEMATCHINFO

// ProdeMatchInfo: [{
//   info_PartidosId: 1543883
//   Goles_Local: "2",
//   Goles_Visitante: "5",
//   Ganador: "argentina",
//   Tiempo_Extra: false,
//   Penales: false
//     },
//     {
//       info_PartidosId: 1543881
//   Goles_Local: "1",
//   Goles_Visitante: "2",
//   Ganador: "Brasil",
//   Tiempo_Extra: false,
//   Penales: false
//     },
//     {
//       info_PartidosId: 1543894
//   Goles_Local: "5",
//   Goles_Visitante: "6",
//   Ganador: "Mexico",
//   Tiempo_Extra: false,
//   Penales: false
//     },
//     {
//       info_PartidosId: 1543895
//   Goles_Local: "5",
//   Goles_Visitante: "6",
//   Ganador: "Arabia Saudita",
//   Tiempo_Extra: false,
//   Penales: false
//     },
//     {
//       info_PartidosId: 1543907
//   Goles_Local: "5",
//   Goles_Visitante: "9",
//   Ganador: "asd",
//   Tiempo_Extra: false,
//   Penales: false
//     },
//     {
//       info_PartidosId: 1543908
//   Goles_Local: "5",
//   Goles_Visitante: "2",
//   Ganador: "argentina",
//   Tiempo_Extra: false,
//   Penales: false
//     }]
