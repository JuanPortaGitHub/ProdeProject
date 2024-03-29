export const getArrayToSubmit = (groups, formData) => {
  const keys = Object.keys(formData);
  const values = Object.values(formData);

  console.log(groups);

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
    let matchWinner = null;
    const { id } = groups[match];
    console.log(prodeObject[id]);
    if (prodeObject[id].home != null && prodeObject[id].away != null) {
      if (prodeObject[id].home == prodeObject[id].away) {
        matchWinner = "Empate";
      }
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
      Ganador: matchWinner,
      Tiempo_Extra: false,
      Penales: false,
    };
    arrayOfMatches.push(matchProde);
  }

  return arrayOfMatches;
};
