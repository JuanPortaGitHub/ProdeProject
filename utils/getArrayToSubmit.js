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
      // console.log(currHome);
    }
    currAway = values[match];

    if (matchId === currMatchId) {
      const currMatch = { [+currMatchId]: { home: currHome, away: currAway } };
      prodeObject = { ...prodeObject, ...currMatch };
    }
  }

  // console.log(prodeObject);

  let arrayOfMatches = [];

  for (let match in groups) {
    // console.log(groups[match]);
    const { id } = groups[match];
    const matchProde = {
      info_PartidosId: id,
      Goles_Local: prodeObject[id].home,
      Goles_Visitante: prodeObject[id].away,
      Ganador: "robertito",
      Tiempo_Extra: false,
      Penales: false,
    };
    arrayOfMatches.push(matchProde);
  }

  return arrayOfMatches;
};
