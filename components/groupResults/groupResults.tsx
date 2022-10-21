import Image from "next/image";
import {
  StyledFlag,
  StyledMainComponent,
  StyledTitles,
  DividerLine,
  StyledContent,
  StyledGroup,
  StyledGroupName,
  StyledP,
  StyledGroupWithName,
} from "./styled";
import { getGroups } from "../../utils/getGroups";
import { getGroupResultsArray } from "../../utils/getGroupResultsArray";
import useAxios from "../../hooks/useAxios";
import React, { useEffect, useState } from "react";

const faseGroup = getGroups();

const GroupResults = () => {
  const [results, setResults] = useState([]);
  const { response, loading, error } = useAxios(
    "https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4429&s=2022"
  );

  useEffect(() => {
    if (response !== null) {
      console.log("table", response.table);
      const resultsOfFunction = getGroupResultsArray(
        faseGroup,
        response?.table
      );

      setResults(resultsOfFunction);
    }
    console.log(results);
  }, [response]);

  return (
    <StyledMainComponent>
      {results.map((group) => (
        <React.Fragment key={group.groupName}>
          <StyledGroupWithName>
            <StyledGroupName>Grupo {group.groupName}</StyledGroupName>
            <StyledGroup>
              <StyledTitles>
                <StyledP>Equipo</StyledP>
                <StyledP>PJ</StyledP>
                <StyledP>G</StyledP>
                <StyledP>E</StyledP>
                <StyledP>P</StyledP>
                <StyledP>GF</StyledP>
                <StyledP>GC</StyledP>
                <StyledP>DG</StyledP>
                <StyledP>Pts</StyledP>
                {/* <StyledP>Ultimos 5</StyledP> */}
              </StyledTitles>
              <DividerLine />
              {group.teams.map((team) => (
                <StyledContent key={team.name}>
                  <div style={{ display: "flex", gap: "0.3rem" }}>
                    <StyledFlag>
                      <Image
                        src={team.flag}
                        alt="badge"
                        width={50}
                        height={30}
                      />
                    </StyledFlag>
                    <StyledP>{team.name}</StyledP>
                  </div>
                  <StyledP>{team.intPlayed}</StyledP>
                  <StyledP>{team.intWin}</StyledP>
                  <StyledP>{team.intDraw}</StyledP>
                  <StyledP>{team.intLoss}</StyledP>
                  <StyledP>{team.intGoalsFor}</StyledP>
                  <StyledP>{team.intGoalsAgainst}</StyledP>
                  <StyledP>{team.intGoalDifference}</StyledP>
                  <StyledP>{team.intPoints}</StyledP>
                  {/* <StyledP>{team.intPoints}</StyledP> */}
                </StyledContent>
              ))}
            </StyledGroup>
          </StyledGroupWithName>
        </React.Fragment>
      ))}
    </StyledMainComponent>
  );
};

export default GroupResults;
