export const getGroupResultsArray = (worldCupTeams, resultsOfquery) => {
  let resultsWithTeams = [];
  let groupWithResults = [];
  let NewGroupWithResults = [];

  const startedMatches = resultsOfquery.filter(
    (match) => match.strStatus !== "Not Started"
  );

  const calculateHomePoints = (teamObject, accumulatedPoints) => {
    let points = 0;
    let g = 0;
    let p = 0;
    let e = 0;
    let gf = 0;
    let gc = 0;

    if (+teamObject.intHomeScore == +teamObject.intAwayScore) {
      points = +accumulatedPoints.pts + 1;
      e = +accumulatedPoints.e + 1;
    }

    if (+teamObject.intHomeScore < +teamObject.intAwayScore) {
      p = +accumulatedPoints.p + 1;
    }

    if (+teamObject.intHomeScore > +teamObject.intAwayScore) {
      points = +accumulatedPoints.pts + 3;
      g = +accumulatedPoints.g + 1;
    }

    gf = +teamObject.intHomeScore + +accumulatedPoints.gf;
    gc = +teamObject.intAwayScore + +accumulatedPoints.gc;

    const newAccumulatedPoints = {
      ...accumulatedPoints,
      g: g,
      e: e,
      p: p,
      pts: points,
      gf: gf,
      gc: gc,
      dg: gf - gc,
      pj: accumulatedPoints.pj + 1,
    };

    return newAccumulatedPoints;
  };
  const calculateAwayPoints = (teamObject, accumulatedPoints) => {
    let points = 0;
    let g = 0;
    let p = 0;
    let e = 0;
    let gf = 0;
    let gc = 0;

    if (+teamObject.intHomeScore == +teamObject.intAwayScore) {
      points = accumulatedPoints.pts + 1;
      e = accumulatedPoints.e + 1;
    }

    if (+teamObject.intHomeScore > +teamObject.intAwayScore) {
      p = accumulatedPoints.p + 1;
    }

    if (+teamObject.intHomeScore < +teamObject.intAwayScore) {
      points = accumulatedPoints.pts + 3;
      g = accumulatedPoints.g + 1;
    }

    gf = +teamObject.intHomeScore + +accumulatedPoints.gf;
    gc = +teamObject.intAwayScore + +accumulatedPoints.gc;

    const newAccumulatedPoints = {
      ...accumulatedPoints,
      g: g,
      e: e,
      p: p,
      pts: points,
      gf: gf,
      gc: gc,
      dg: gf - gc,
      pj: +accumulatedPoints.pj + 1,
    };

    return newAccumulatedPoints;
  };

  const calculatePoints = (team) => {
    let accumulatedPoints = {
      ...team,
      pj: 0,
      g: 0,
      e: 0,
      p: 0,
      gf: 0,
      gc: 0,
      dg: 0,
      pts: 0,
    };
    for (let i = 0; i < startedMatches.length; i++) {
      if (startedMatches[i].strHomeTeam == team.name) {
        accumulatedPoints = calculateHomePoints(
          startedMatches[i],
          accumulatedPoints
        );
      }
      if (startedMatches[i].strAwayTeam == team.name) {
        accumulatedPoints = calculateAwayPoints(
          startedMatches[i],
          accumulatedPoints
        );
      }
    }
    return accumulatedPoints;
  };

  for (let i = 0; i < worldCupTeams.length; i++) {
    groupWithResults = [];
    for (let j = 0; j < worldCupTeams[i].teams.length; j++) {
      const team = calculatePoints(worldCupTeams[i].teams[j]);
      groupWithResults = [team, ...groupWithResults];
      const orderGroupWithResults = groupWithResults.sort(
        (teamA, teamB) => teamB.pts - teamA.pts
      );
      const orderScoreDiff = orderGroupWithResults.sort((teamA, teamB) => {
        if (teamA.pts == teamB.pts) console.log("entre");
        return teamB.dg - teamA.dg;
      });

      NewGroupWithResults = {
        ...worldCupTeams[i],
        teams: groupWithResults,
      };
    }
    resultsWithTeams.push(NewGroupWithResults);
  }

  return resultsWithTeams;
};
