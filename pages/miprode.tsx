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
  StyledFlag,
  StyledprodeContainer,
} from "../styles/groupfase";
import { getGroups } from "../utils/getGroups";
import { motion } from "framer-motion";
import GroupMatches from "../components/groupfase/groupMatches/groupMatches";
import { t } from "../utils/dictionary";
import { StyledBody } from "../components/sidebar/styled";
import Sidebar from "../components/sidebar/sidebar";

const Miprode: NextPage = () => {
  const [currentGroup, setCurrentGroup] = useState("");

  const faseGroups = getGroups();

  return (
    <>
      <StyledTopScreen>
        <StyledImage>
          <Image src="/worldcup8.png" alt="worldCup" width={500} height={500} />
        </StyledImage>
        <StyledprodeContainer>
          <StyledGroupsContainer>
            {faseGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, translateX: -50 }}
                animate={{ opacity: 1, translateX: 0 }}
                exit={{ opacity: 0, translateX: -50 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setCurrentGroup(group.groupName)}
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
                    <StyledTeamContainer>
                      <StyledFlag>
                        <Image
                          src={group.badges[0]}
                          alt="badge"
                          width={50}
                          height={20}
                        />
                      </StyledFlag>
                      <StyleName>{t(group.teams[0])}</StyleName>
                    </StyledTeamContainer>
                    <StyledTeamContainer>
                      <StyledFlag>
                        <Image
                          src={group.badges[1]}
                          alt="badge"
                          width={50}
                          height={20}
                        />
                      </StyledFlag>
                      <StyleName>{t(group.teams[1])}</StyleName>
                    </StyledTeamContainer>
                    <StyledTeamContainer>
                      <StyledFlag>
                        <Image
                          src={group.badges[2]}
                          alt="badge"
                          width={50}
                          height={20}
                        />
                      </StyledFlag>
                      <StyleName>{t(group.teams[2])}</StyleName>
                    </StyledTeamContainer>
                    <StyledTeamContainer>
                      <StyledFlag>
                        <Image
                          src={group.badges[3]}
                          alt="badge"
                          width={50}
                          height={20}
                        />
                      </StyledFlag>
                      <StyleName>{t(group.teams[3])}</StyleName>
                    </StyledTeamContainer>
                  </StyledGroupTeams>
                </StyledGroup>
              </motion.div>
            ))}
          </StyledGroupsContainer>
          <GroupMatches group={currentGroup} />
        </StyledprodeContainer>
      </StyledTopScreen>
    </>
  );
};

export default Miprode;
