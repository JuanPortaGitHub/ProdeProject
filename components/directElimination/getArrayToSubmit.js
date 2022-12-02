export const getArrayToSubmit = (groups, formData) => {
  const keys = Object.keys(formData);
  const values = Object.values(formData);

  // console.log(groups, formData);

  let prodeObject = {};
  let currMatchId = "";
  let currHome = "";
  let currAway = "";
  let currInstance = "";
  let currWinner = "";

  console.log(keys, values);

  for (let match in keys) {
    const matchId = keys[match].substring(0, keys[match].indexOf("/"));
    if (matchId !== currMatchId) {
      currMatchId = matchId;
    }
    for (let match in keys) {
      const matchIdNew = keys[match].substring(0, keys[match].indexOf("/"));
      if (matchId == matchIdNew) {
        const lastPartOfString = keys[match].substring(
          keys[match].lastIndexOf("/") + 1
        );
        if (lastPartOfString == "home") currHome = values[match];
        if (lastPartOfString == "away") currAway = values[match];
        if (lastPartOfString == "instance") currInstance = values[match];
        if (lastPartOfString == "winnerTeam") currWinner = values[match];

        const currMatch = {
          [+currMatchId]: {
            home: currHome,
            away: currAway,
            winner: currWinner,
            instance: currInstance,
          },
        };
        prodeObject = { ...prodeObject, ...currMatch };
      }
    }
  }
  let arrayOfMatches = [];

  // console.log(prodeObject);

  // updatear el campo Ganador con los campos : ${nombrelocal} / ${nombrevisitante} / Empate

  let matchWinner;

  for (let match in groups) {
    let matchWinner = null;
    const { id } = groups[match];
    console.log(prodeObject[id]);
    if (prodeObject[id].home != null && prodeObject[id].away != null) {
      // if (prodeObject[id].home == prodeObject[id].away) {
      //   matchWinner = "Empate";
      // }
      if (prodeObject[id].home > prodeObject[id].away) {
        matchWinner = groups[match].EquipoLocal.nombre_equipo;
      }
      if (prodeObject[id].home < prodeObject[id].away) {
        matchWinner = groups[match].EquipoVisitante.nombre_equipo;
      }
    }

    const matchProde = {
      info_PartidosId: id,
      Goles_Local: prodeObject[id].home?.toString() || null,
      Goles_Visitante: prodeObject[id].away?.toString() || null,
      Ganador: prodeObject[id].winner,
      Tiempo_Extra: prodeObject[id].instance == "120" ? true : false,
      Penales: prodeObject[id].instance == "Penales" ? true : false,
    };
    arrayOfMatches.push(matchProde);
  }

  return arrayOfMatches;
};
