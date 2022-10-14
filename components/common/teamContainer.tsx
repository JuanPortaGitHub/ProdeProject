import React from "react";
import Image from "next/image";
import {
  StyledTeamContainer,
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
        <Grid container alignItems="center">
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <div
              style={{
                width: "3vw",
              }}
            >
              <Image src={flag} alt="" width={50} height={30} />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledTeamContainer>{team}</StyledTeamContainer>
          </Grid>
        </Grid>
      ) : (
        <Grid container alignItems="center">
          <Grid item xs={12} md={8}>
            <StyledTeamContainer>{team}</StyledTeamContainer>
          </Grid>
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <div
              style={{
                width: "3vw",
              }}
            >
              <Image src={flag} alt="" width={50} height={30} />
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default TeamContainer;
