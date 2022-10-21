import type { NextPage } from "next";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  StyledTopScreen,
  StyledImage,
  StyledMainContent,
  StyledFriendsGroup,
  StyledTitle,
} from "../../styles/groupfase";
import { StyledBody } from "../../components/sidebar/styled";
import { StyledContainer } from "../../styles/styled";
import Sidebar from "../../components/sidebar/sidebar";
import { GET_USER_GROUPS } from "../../graphql/queries/userQueries";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";
import Header from "../../components/Header/headerMiprode";
import { MenuItem, Select } from "@mui/material";
import Link from "next/link";
import { StyledAnchor } from "../../components/Header/StyledHeader";
import WordldCupGroups from "../../components/groupfase/worldCupGroups";

const FaseGroup: NextPage = () => {
  const { data: session, status } = useSession();
  const [currUser, setCurrUser] = useState({});
  const { loading, error, data } = useQuery(GET_USER_GROUPS, {
    variables: { getUserByIdId: session?.id },
  });
  const [selectedFriendsGroup, setSelectedFriendsGroup] = useState("");
  // const isDesktopMode = useMediaQuery("(min-width:600px)");

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    setSelectedFriendsGroup(() => event.target.value as string);
  };

  useEffect(() => {
    if (data) {
      setCurrUser({ id: session?.id, ...session?.user });
      if (data.GetUserById.Grupos.length != 0) {
        setSelectedFriendsGroup(() => data.GetUserById.Grupos[0]?.id);
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
          {selectedFriendsGroup == "" ? (
            <StyledTitle>
              <Link href="/#CreateGroup">
                <StyledAnchor>Crea un grupo!</StyledAnchor>
              </Link>
            </StyledTitle>
          ) : (
            <StyledTitle>Elegí tu grupo</StyledTitle>
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
          <StyledTopScreen data-id="hola">
            <StyledImage>
              <Image
                src="/worldcup8.png"
                alt="worldCup"
                width={500}
                height={500}
              />
            </StyledImage>
            <WordldCupGroups
              userGroup={selectedFriendsGroup}
              user={currUser}
              showDate={true}
              isEditing={true} // a futuro podemos controlar cuando puede editar en base a algun criterio
            />
          </StyledTopScreen>
        </StyledMainContent>
      </StyledContainer>
    </>
  );
};

export default FaseGroup;
