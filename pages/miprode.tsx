import type { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
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
} from "../styles/groupfase";
import { getGroups } from "../utils/getGroups";
import { motion } from "framer-motion";
import GroupMatches from "../components/groupfase/groupMatches/groupMatches";
import { t } from "../utils/dictionary";

const Miprode: NextPage = () => {
  const [currentGroup, setCurrentGroup] = useState("");

  const faseGroups = getGroups();

  return (
    <>
      <StyledTopScreen>
        <StyledImage>
          <Image src="/worldcup8.png" alt="worldCup" width={500} height={500} />
        </StyledImage>
        <StyledGroupsContainer>
          {faseGroups.map((group, i) => (
            <StyledGroup
              as={motion.div}
              key={i}
              initial={{ opacity: 0, translateX: -50 }}
              animate={{ opacity: 1, translateX: 0 }}
              exit={{ opacity: 0, translateX: -50 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentGroup(group.groupName)}
            >
              <StyledGroupName>
                <StyledH4>Grupo</StyledH4>
                <StyledH1>{group.groupName}</StyledH1>
              </StyledGroupName>
              <StyledGroupTeams>
                <StyledTeamContainer>
                  <Image
                    src={group.badges[0]}
                    alt="badge"
                    width={25}
                    height={25}
                  />
                  <StyleName>{t(group.teams[0])}</StyleName>
                </StyledTeamContainer>
                <StyledTeamContainer>
                  <Image
                    src={group.badges[1]}
                    alt="badge"
                    width={25}
                    height={25}
                  />
                  <StyleName>{t(group.teams[1])}</StyleName>
                </StyledTeamContainer>
                <StyledTeamContainer>
                  <Image
                    src={group.badges[2]}
                    alt="badge"
                    width={25}
                    height={25}
                  />
                  <StyleName>{t(group.teams[2])}</StyleName>
                </StyledTeamContainer>
                <StyledTeamContainer>
                  <Image
                    src={group.badges[3]}
                    alt="badge"
                    width={25}
                    height={25}
                  />
                  <StyleName>{t(group.teams[3])}</StyleName>
                </StyledTeamContainer>
              </StyledGroupTeams>
            </StyledGroup>
          ))}
        </StyledGroupsContainer>
      </StyledTopScreen>
      <GroupMatches group={currentGroup} />
    </>
  );
};

export default Miprode;
