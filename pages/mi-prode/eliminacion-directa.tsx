import type { NextPage } from "next";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import {
  StyledGroupsContainer,
  StyledGroup,
  StyledGroupName,
  StyledTeamContainer,
  StyledGroupTeams,
  StyledTopScreen,
  StyledH4,
  StyledH1,
  StyleName,
  StyledFlag,
  StyledprodeContainer,
} from "../../styles/groupfase";
import { getGroups } from "../../utils/getGroups";
import { motion } from "framer-motion";
import GroupMatches from "../../components/groupfase/groupMatches/matches";
import { t } from "../../utils/dictionary";
import { StyledBody } from "../../components/sidebar/styled";
import { StyledContainer } from "../../styles/styled";
import Sidebar from "../../components/sidebar/sidebar";
import { GET_USER_GROUPS } from "../../graphql/queries/userQueries";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import Header from "../../components/Header/header";
import ShareIcon from "@mui/icons-material/Share";
import { DirectElimination } from "../../components/directElimination/directElimination";
import {
  StyledFriendsGroup,
  StyledMainContent,
  StyledTitle,
  StyledImage,
} from "../../styles/eliminacionDirecta";
import { StyledAnchor } from "../../components/Header/StyledHeader";
import Link from "next/link";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import ShareGroup from "../../components/UserGroup/shareGroup";

const Table: NextPage = () => {
  const [currentGroup, setCurrentGroup] = useState("");
  const { data: session, status } = useSession();
  const { loading, error, data, refetch } = useQuery(GET_USER_GROUPS, {
    variables: { getUserByIdId: session?.id },
  });
  const groupName = useRef("");
  const [currUser, setCurrUser] = useState({});
  const [showShareGroupModal, setShowShareGroupModal] = useState(false);
  // const [groupName, setGroupName] = useState();
  const [selectedFriendsGroup, setSelectedFriendsGroup] = useState("");

  const showModalHandler = () => {
    setShowShareGroupModal(true);
  };

  const getGroupName = (groups, id): object => {
    return groups.find((group: {}) => group.id == id);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedFriendsGroup(() => event.target.value as string);
    localStorage.setItem("groupId", event.target.value);
    const group = getGroupName(data.GetUserById.Grupos, event.target.value);
    groupName.current = group.nombre;
  };

  useEffect(() => {
    if (data) {
      setCurrUser({ id: session?.id, ...session?.user });
      if (data.GetUserById.Grupos.length != 0) {
        if (localStorage.getItem("groupId") != null) {
          setSelectedFriendsGroup(localStorage.getItem("groupId"));
          refetch({ getUserByIdId: session?.id });
          groupName.current = data.GetUserById.Grupos[0].nombre;
          return;
        }
        setSelectedFriendsGroup(() => data.GetUserById.Grupos[0]?.id);
        groupName.current = data.GetUserById.Grupos[0].nombre;
        refetch({ getUserByIdId: session?.id });
      }
    }
  }, [data]);

  return (
    <>
      <StyledContainer>
        <StyledBody>
          <Sidebar />
        </StyledBody>
        <Header />
        <StyledMainContent>
          <StyledContainer>
            <StyledBody>
              <Sidebar />
            </StyledBody>
            <Header />
            <StyledMainContent>
              {selectedFriendsGroup == "" ? (
                <StyledTitle>
                  <Link href="/#CreateGroup">
                    <StyledAnchor>Crea un grupo!</StyledAnchor>
                  </Link>
                </StyledTitle>
              ) : (
                <StyledTitle>
                  Elegí tu grupo y compartilo{" "}
                  <ShareIcon onClick={showModalHandler} />
                </StyledTitle>
              )}

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
              <StyledTopScreen>
                <StyledImage>
                  <Image
                    src="/worldcup8.png"
                    alt="worldCup"
                    width={500}
                    height={500}
                  />
                </StyledImage>
                <DirectElimination
                  userGroup={selectedFriendsGroup}
                  user={currUser}
                  showDate={true}
                  isEditing={true}
                />
                {/* <WordldCupGroups
                  userGroup={selectedFriendsGroup}
                  user={currUser}
                  showDate={true}
                  isEditing={true} // a futuro podemos controlar cuando puede editar en base a algun criterio
                /> */}
              </StyledTopScreen>
            </StyledMainContent>
            <ShareGroup
              groupName={groupName.current}
              show={showShareGroupModal}
              setShow={setShowShareGroupModal}
            />
          </StyledContainer>
        </StyledMainContent>
      </StyledContainer>
    </>
  );
};

export default Table;
