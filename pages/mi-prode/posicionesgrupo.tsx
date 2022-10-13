import type { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import { StyledPaperContainer } from "../../styles/styled";
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
import { StyledBody } from "../../components/sidebar/styled";
import { StyledContainer } from "../../styles/styled";
import Header from "../../components/Header/header";
import Sidebar from "../../components/sidebar/sidebar";
import GroupDetail from "../../components/GroupDetail";
const Posiciones: NextPage = () => {
  return (
    <StyledContainer>
      <StyledBody>
        <Sidebar />
      </StyledBody>
      <Header />
      <StyledMainContent>
        <GroupDetail />
      </StyledMainContent>
    </StyledContainer>
  );
};

export default Posiciones;
