import { TextField, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { Controller } from "react-hook-form";
import TeamContainer from "../common/teamContainer";
import { StyledTextField, StyledContainer } from "./styled";
import { t } from "../../utils/dictionary";

interface Props {
  homeTeam: string;
  flagHomeTeam: string;
  awayTeam: string;
  flagAwayTeam: string;
  homeScore: string;
  awayScore: string;
}

export const Match = ({
  homeTeam,
  flagHomeTeam,
  awayTeam,
  flagAwayTeam,
  homeScore,
  awayScore,
}: Props) => {
  return (
    <StyledContainer>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          //   width: "70%",
          alignItems: "center",
        }}
      >
        <>
          <TeamContainer team={t(homeTeam)} flag={flagHomeTeam} home={true} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              color: "white",
            }}
          >
            <StyledTextField size="small" value={homeScore} disabled />
            VS
            <StyledTextField size="small" value={awayScore} disabled />
          </div>
          <TeamContainer team={t(awayTeam)} flag={flagAwayTeam} home={false} />
        </>
      </div>
    </StyledContainer>
  );
};
