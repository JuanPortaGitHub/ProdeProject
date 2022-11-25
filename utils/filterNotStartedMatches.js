export const filterNotStartedMatches = (matches) => {
  const today = new Date();

  console.log(matches);

  const startedMatches = matches.filter((match) => {
    const date = new Date(+match.DiaHora);
    if (today >= date) return match;
  });

  return startedMatches;
};
