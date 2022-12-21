import { useEffect, useState } from "react";
import { StyledContainer, StyledTitle } from "./styled";
import { Match } from "./match";
import NextMatches from "../nextMatches";
import useAxios from "../../hooks/useAxios";

export const LiveMatch = ({ selectedUserGrupo }) => {
  const [currentMatches, setCurrentMatches] = useState([]);
  const { response, loading, error } = useAxios(
    "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
  );

  useEffect(() => {
    if (response !== null) {
      setCurrentMatches(
        response?.events.filter(
          (match) =>
            match.strStatus == "1H" ||
            match.strStatus == "2H" ||
            match.strStatus == "HT"
        )
      );
    }
  }, [response]);

  return (
    <>
      {currentMatches.length > 0 ? (
        <StyledContainer>
          <StyledTitle>
            {currentMatches.length > 1 ? "Partidos" : "Partido"} en curso
          </StyledTitle>
          {currentMatches.map((match) => (
            <>
              <div>
                <Match match={match} group={selectedUserGrupo} />
              </div>
            </>
          ))}
        </StyledContainer>
      ) : (
        <div style={{ paddingTop: "5rem" }}>{/* <NextMatches /> */}</div>
      )}
    </>
  );
};
