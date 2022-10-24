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
        <Grid alignItems={"center"} container>
          <Grid
            item
            xs={4}
            md={4}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "0.2rem",
            }}
          >
            <StyledImageContainer style={{ textAlign: "end" }}>
              {flag ? <Image src={flag} alt="" width={50} height={30} /> : null}
            </StyledImageContainer>
          </Grid>
          <Grid item xs={8} md={8}>
            <StyledTeamContainer>{team}</StyledTeamContainer>
          </Grid>
        </Grid>
      ) : (
        <Grid alignItems={"center"} container>
          <Grid item xs={8} md={8}>
            <StyledTeamContainer>{team}</StyledTeamContainer>
          </Grid>
          <Grid
            item
            xs={4}
            md={4}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingLeft: "0.2rem",
            }}
          >
            <StyledImageContainer>
              {flag ? <Image src={flag} alt="" width={50} height={30} /> : null}
            </StyledImageContainer>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TeamContainer;
