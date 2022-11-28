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
    "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
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
      const resultsOfFunction = getGroupResultsArray(
        faseGroup,
        response?.events
      );
      setResults(resultsOfFunction);
    }
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
                    <StyledP>{team.pj || 0} </StyledP>
                    <StyledP>{team.g || 0}</StyledP>
                    <StyledP>{team.e || 0}</StyledP>
                    <StyledP>{team.p || 0} </StyledP>
                    <StyledP>{team.gf || 0} </StyledP>
                    <StyledP>{team.gc || 0} </StyledP>
                    <StyledP>{team.dg || 0} </StyledP>
                    <StyledP>{team.pts || 0} </StyledP>
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
