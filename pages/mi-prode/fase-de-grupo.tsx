import type { NextPage } from "next";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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
  StyledFriendsGroup,
  StyledTitle,
  StyledTextfield,
} from "../../styles/groupfase";
import { getGroups } from "../../utils/getGroups";
import { motion } from "framer-motion";
import GroupMatches from "../../components/groupfase/groupMatches/groupMatches";
import { t } from "../../utils/dictionary";
import { StyledBody } from "../../components/sidebar/styled";
import { StyledContainer } from "../../styles/styled";
import Sidebar from "../../components/sidebar/sidebar";
import { GET_USER_GROUPS } from "../../graphql/queries/userQueries";
import { prisma } from "../../lib/prisma";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import Header from "../../components/Header/headerMiprode";
import { MenuItem, Select } from "@mui/material";

const FaseGroup: NextPage = () => {
  const [currentGroup, setCurrentGroup] = useState("");
  const { data: session, status } = useSession();
  const { loading, error, data } = useQuery(GET_USER_GROUPS, {
    variables: { getUserByIdId: session?.id },
  });
  const [selectedFriendsGroup, setSelectedFriendsGroup] = useState("");
  // const isDesktopMode = useMediaQuery("(min-width:600px)");
  // const { Grupos } = data.GetUserById;

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setSelectedFriendsGroup(() => event.target.value as string);
  };

  const faseGroups = getGroups();

  console.log(data);

  useEffect(() => {
    if (data) {
      setSelectedFriendsGroup(() => data.GetUserById.Grupos[0].id);
    }
  }, [data]);

  return (
    <>
      <StyledContainer>
        {/* <StyledBody>
          <Sidebar />
        </StyledBody>*/}
        <Header />
        <StyledMainContent>
          <StyledTitle>Elegí tu grupo</StyledTitle>
          <StyledFriendsGroup>
            <Select
              sx={{ color: "white", border: "1px solid white" }}
              labelId="demo-simple-select-disabled-label"
              id="demo-simple-select-disabled"
              value={selectedFriendsGroup}
              onChange={handleChange}
              fullWidth
            >
              {data?.GetUserById.Grupos.map((grupo: any) => (
                <MenuItem key={grupo.id} value={grupo.id}>
                  {grupo.nombre}
                </MenuItem>
              ))}
            </Select>
          </StyledFriendsGroup>
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
              <GroupMatches
                teamsGroup={currentGroup}
                userGroup={selectedFriendsGroup}
                userId={session?.id}
              />
            </StyledprodeContainer>
          </StyledTopScreen>
        </StyledMainContent>
      </StyledContainer>
    </>
  );
};

export default FaseGroup;
