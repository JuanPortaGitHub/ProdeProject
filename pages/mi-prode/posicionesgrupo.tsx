import type { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
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
      <GroupDetail />
    </StyledContainer>
  );
};

export default Posiciones;