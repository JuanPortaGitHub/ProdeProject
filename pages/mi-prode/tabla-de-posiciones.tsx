import type { NextPage } from "next";
import Image from "next/image";
import React, { useState, useRef } from "react";
import {
  StyledGroupsContainer,
  StyledGroup,
  StyledGroupName,
  StyledTeamContainer,
  StyledGroupTeams,
  StyledTopScreen,
  StyledImage,
  StyledH4,
  StyledH1,
  StyleName,
  StyledFlag,
  StyledprodeContainer,
  StyledMainContent,
  StyledRightborder,
  StyledRightSquare,
  StyleResult,
} from "../../styles/tabla-de-posiciones";
import { getGroups } from "../../utils/getGroups";
import { motion } from "framer-motion";
import { t } from "../../utils/dictionary";
import { StyledBody } from "../../components/sidebar/styled";
import { StyledContainer } from "../../styles/styled";
import Sidebar from "../../components/sidebar/sidebar";
import Header from "../../components/Header/headerMiprode";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import NextMatches from "../../components/nextMatches";

const TablaPosiciones: NextPage = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const refContainer = useRef();
  const faseGroups = getGroups();

  const handleScroll = () => {
    refContainer?.current?.scrollTo({
      top: 0,
      left: currentPosition + 100,
      behavior: "smooth",
    });
    if (currentPosition == 1100) {
      refContainer?.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setCurrentPosition(() => 0);
    }
    setCurrentPosition((curr) => curr + 100);
  };
  return (
    <>
      <StyledContainer>
        <StyledBody>
          <Sidebar />
        </StyledBody>
        <Header />
        <StyledMainContent>
          <StyledTopScreen data-id="hola">
            <StyledImage>
              <Image
                src="/worldcup8.png"
                alt="worldCup"
                width={500}
                height={500}
              />
            </StyledImage>
            <StyledprodeContainer>
              <StyledGroupsContainer ref={refContainer}>
                {faseGroups.map((group, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, translateX: -50 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0, translateX: -50 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <StyledGroup
                      as={motion.div}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <StyledGroupName>
                        <StyledH4>Grupo</StyledH4>
                        <StyledH1>{group.groupName}</StyledH1>
                      </StyledGroupName>
                      <StyledGroupTeams>
                        {group.teams.map((team) => (
                          <StyledTeamContainer key={team.name}>
                            <StyledFlag>
                              <Image
                                src={team.flag}
                                alt="badge"
                                width={50}
                                height={30}
                              />
                            </StyledFlag>
                            <StyleName>{t(team.name)}</StyleName>
                          </StyledTeamContainer>
                        ))}
                      </StyledGroupTeams>
                    </StyledGroup>
                  </motion.div>
                ))}
              </StyledGroupsContainer>

              <StyledRightborder onClick={handleScroll}>
                <StyledRightSquare></StyledRightSquare>
                <ArrowForwardIosIcon />
              </StyledRightborder>
              <NextMatches />
            </StyledprodeContainer>
          </StyledTopScreen>
        </StyledMainContent>
      </StyledContainer>
    </>
  );
};

export default TablaPosiciones;
