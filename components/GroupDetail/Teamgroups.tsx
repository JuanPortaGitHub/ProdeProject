import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  StyledGroup,
  StyledGroupName,
  StyledH4,
  StyledH1,
  StyledGroupTeams,
  StyledTeamContainer,
  StyledFlag,
  StyleName,
  StyledContainer,
  StyledDate,
  StyledMatch,
  StyledMainComponent,
} from "../../styles/posicionesgrupo";
import Box from "@mui/material/Box";
import { t } from "../../utils/dictionary";
import { getGroups } from "../../utils/getGroups";
import { Grid, Modal } from "@mui/material";
import TeamContainer from "../common/teamContainer";
import { Matches } from "./Matches";

export const Teamgroups = ({ selectedPlayer, selectedUserGrupo }) => {
  const [currentGroup, setCurrentGroup] = useState("");
  const groups = getGroups();

  console.log("currentGroup", currentGroup);
  return (
    <Modal open={true}>
      <StyledMainComponent
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={7}>
            <Grid container spacing={2}>
              {groups.map((group, i) => (
                <Grid key={i} item xs={6} md={6}>
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
                      id="grupo"
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
                              layout={"fixed"}
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
                              layout={"fixed"}
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
                              layout={"fixed"}
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
                              layout={"fixed"}
                            />
                          </StyledFlag>
                          <StyleName>{t(group.teams[3])}</StyleName>
                        </StyledTeamContainer>
                      </StyledGroupTeams>
                    </StyledGroup>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {currentGroup && (
            <Grid item xs={12} md={5}>
              <Matches
                selectedUserGrupo={selectedUserGrupo}
                currentGroup={currentGroup}
                selectedPlayer={selectedPlayer}
              />
            </Grid>
          )}
        </Grid>
      </StyledMainComponent>
    </Modal>
  );
};
