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
  StyledTitle,
  StyledGroupWithName,
  StyledRightborder,
} from "./styled";
import { getGroups } from "../../utils/getGroups";
import { getGroupResultsArray } from "../../utils/getGroupResultsArray";
import useAxios from "../../hooks/useAxios";
import React, { useEffect, useRef, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { t } from "../../utils/dictionary";

const faseGroup = getGroups();

const GroupResults = () => {
  const [results, setResults] = useState([]);
  const refContainer = useRef();
  const [currentPosition, setCurrentPosition] = useState(0);
  const { response, loading, error } = useAxios(
    "https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=4429&s=2022"
  );

  const handleScroll = (e) => {
    refContainer?.current?.scrollTo({
      top: 0,
      left: currentPosition + window.innerWidth - 40,
      behavior: "smooth",
    });
    if (currentPosition >= window.innerWidth * 8) {
      refContainer?.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setCurrentPosition(() => 0);
      return;
    }
    setCurrentPosition((curr) => curr + window.innerWidth);
  };

  useEffect(() => {
    if (response !== null) {
      // console.log(response.table);
      const resultsOfFunction = getGroupResultsArray(
        faseGroup,
        response?.table
      );
      setResults(resultsOfFunction);
    }
    // console.log(results);
  }, [response]);

  return (
    <div style={{ display: "flex" }}>
      <StyledMainComponent ref={refContainer}>
        {results.map((group) => (
          <React.Fragment key={group.groupName}>
            <StyledGroupWithName>
              <StyledGroupName>Grupo {group.groupName}</StyledGroupName>
              <StyledGroup>
                <StyledTitles>
                  <StyledTitle>Equipo</StyledTitle>
                  <StyledTitle>PJ</StyledTitle>
                  <StyledTitle>G</StyledTitle>
                  <StyledTitle>E</StyledTitle>
                  <StyledTitle>P</StyledTitle>
                  <StyledTitle>GF</StyledTitle>
                  <StyledTitle>GC</StyledTitle>
                  <StyledTitle>DG</StyledTitle>
                  <StyledTitle>Pts</StyledTitle>
                </StyledTitles>
                <DividerLine />
                {group.teams.map((team) => (
                  <StyledContent key={team.name}>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.3rem",
                        paddingLeft: "0.8rem",
                      }}
                    >
                      <StyledFlag>
                        <Image
                          src={team.flag}
                          alt="badge"
                          width={50}
                          height={30}
                        />
                      </StyledFlag>
                      <StyledP>{t(team.name)}</StyledP>
                    </div>
                    <StyledP>{team.intPlayed || 0} </StyledP>
                    <StyledP>{team.intWin || 0}</StyledP>
                    <StyledP>{team.intDraw || 0}</StyledP>
                    <StyledP>{team.intLoss || 0} </StyledP>
                    <StyledP>{team.intGoalsFor || 0} </StyledP>
                    <StyledP>{team.intGoalsAgainst || 0} </StyledP>
                    <StyledP>{team.intGoalDifference || 0} </StyledP>
                    <StyledP>{team.intPoints || 0} </StyledP>
                  </StyledContent>
                ))}
              </StyledGroup>
            </StyledGroupWithName>
          </React.Fragment>
        ))}
      </StyledMainComponent>
      <StyledRightborder onClick={handleScroll}>
        <ArrowForwardIosIcon />
      </StyledRightborder>
    </div>
  );
};

export default GroupResults;
