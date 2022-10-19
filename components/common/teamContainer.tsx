import React from "react";
import Image from "next/image";
import {
  StyledTeamContainer,
  StyledImageContainer,
  StyleArrowLeft,
  StyleArrowRight,
  StyleArrowLeftInner,
  StyleArrowRightInner,
  Container,
} from "./styled";
import { Grid } from "@mui/material";

interface Props {
  team: string;
  flag: string;
  home: boolean;
}

const TeamContainer = ({ team, flag, home }: Props) => {
  return (
    <>
      {home ? (
        <Grid container columnSpacing={1}>
          <Grid item xs={4} md={4}>
            <StyledImageContainer>
              <Image src={flag} alt="" width={50} height={30} />
            </StyledImageContainer>
          </Grid>
          <Grid item xs={8} md={8}>
            <StyledTeamContainer>{team}</StyledTeamContainer>
          </Grid>
        </Grid>
      ) : (
        <Grid container columnSpacing={1}>
          <Grid item xs={8} md={8}>
            <StyledTeamContainer>{team}</StyledTeamContainer>
          </Grid>
          <Grid item xs={4} md={4}>
            <StyledImageContainer>
              <Image src={flag} alt="" width={50} height={30} />
            </StyledImageContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TeamContainer;
