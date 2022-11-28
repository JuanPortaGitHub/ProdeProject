import type { NextPage } from "next";
import React, { useState, useEffect, useRef } from "react";
import { StyledBody } from "../../components/sidebar/styled";
import {
  StyledBanner,
  StyledContainer,
  StyledMessisContainer,
  StyledExitIcon,
  StyledTopModal,
} from "../../styles/styled";
import Header from "../../components/Header/header";
import Sidebar from "../../components/sidebar/sidebar";
import GroupDetail from "../../components/GroupDetail";
import { MessisBanner } from "../../components/messisBaner/messisBanner";
import ClearIcon from "@mui/icons-material/Clear";

const TablaPosiciones: NextPage = () => {
  const [visibleModal, setVisibleModal] = useState(true);

  const handleClose = () => {
    setVisibleModal(false);
  };

  const randomBolean = Math.random() < 0.5;

  useEffect(() => {
    setVisibleModal(randomBolean);
  }, []);

  return (
    <StyledContainer>
      <StyledBody>
        <Sidebar />
      </StyledBody>
      <Header />
      <GroupDetail />
      {visibleModal && (
        <StyledMessisContainer>
          <StyledTopModal>
            <MessisBanner />
            <StyledExitIcon onClick={handleClose}>
              <ClearIcon />
            </StyledExitIcon>
          </StyledTopModal>
        </StyledMessisContainer>
      )}
    </StyledContainer>
  );
};

export default TablaPosiciones;
