export const getArrayToSubmit = (groups, formData) => {
  const keys = Object.keys(formData);
  const values = Object.values(formData);

  // console.log(keys[0].substring(0, keys[0].indexOf("/")));
  // console.log(keys[0].substring(keys[0].indexOf("/") + 1));

  let prodeObject = {};
  let currMatchId = "";
  let currHome = "";
  let currAway = "";

  for (let match in keys) {
    const matchId = keys[match].substring(0, keys[match].indexOf("/"));
    if (matchId !== currMatchId) {
      currMatchId = matchId;
      currHome = values[match];
    }
    currAway = values[match];

    if (matchId === currMatchId) {
      const currMatch = { [+currMatchId]: { home: currHome, away: currAway } };
      prodeObject = { ...prodeObject, ...currMatch };
    }
  }

  let arrayOfMatches = [];

  // updatear el campo Ganador con los campos : ${nombrelocal} / ${nombrevisitante} / Empate

  let matchWinner;

  for (let match in groups) {
    let matchWinner;
    console.log(groups);
    const { id } = groups[match];
    if (prodeObject[id].home == prodeObject[id].away) {
      matchWinner = "Empate";
    }
    if (prodeObject[id].home > prodeObject[id].away) {
      matchWinner = groups[match].EquipoLocal.nombre_equipo;
    }
    if (prodeObject[id].home < prodeObject[id].away) {
      matchWinner = groups[match].EquipoVisitante.nombre_equipo;
    }

    console.log(matchWinner);
    const matchProde = {
      info_PartidosId: id,
      Goles_Local: prodeObject[id].home,
      Goles_Visitante: prodeObject[id].away,
      Ganador: matchWinner,
      Tiempo_Extra: false,
      Penales: false,
    };
    arrayOfMatches.push(matchProde);
  }

  return arrayOfMatches;
};
