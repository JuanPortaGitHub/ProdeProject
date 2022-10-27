export const getGroupResultsArray = (worldCupTeams, resultsOfquery) => {
  let resultsWithTeams = [];
  let groupWithResults = [];

  for (let i = 0; i < worldCupTeams.length; i++) {
    groupWithResults = [];
    for (let j = 0; j < worldCupTeams[i].teams.length; j++) {
      const team = resultsOfquery.find(
        (element) => element.strTeam == worldCupTeams[i].teams[j].name
      );
      const newTeam = { ...worldCupTeams[i].teams[j], ...team };
      // groupWithResults = [newTeam, ...groupWithResults];
      const unOrderGroupWithResults = [newTeam, ...groupWithResults];
      const orderGroupWithResults = unOrderGroupWithResults.sort(
        (teamA, teamB) => teamB.intPoints - teamA.intPoints
      );
      groupWithResults = [...orderGroupWithResults];
    }

    const NewGroupWithResults = {
      ...worldCupTeams[i],
      teams: groupWithResults,
    };

    resultsWithTeams.push(NewGroupWithResults);
  }

  return resultsWithTeams;
};
