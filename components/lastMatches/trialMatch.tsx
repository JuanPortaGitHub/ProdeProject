import { TextField, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { Controller } from "react-hook-form";
import TeamContainer from "../common/teamContainer";
import { StyledTextField, StyledMatchContainer } from "./styled";
import { t } from "../../utils/dictionary";

interface Props {
  homeTeam: string;
  flagHomeTeam: string;
  awayTeam: string;
  flagAwayTeam: string;
  homeScore: number;
  awayScore: number;
}

const TrialMatch = ({
  homeTeam,
  flagHomeTeam,
  awayTeam,
  flagAwayTeam,
  homeScore,
  awayScore,
}: Props) => {
  return (
    <StyledMatchContainer>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.8fr 1.1fr",
          //   width: "70%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <>
          <TeamContainer team={t(homeTeam)} flag={flagHomeTeam} home={true} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.2rem",
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
    </StyledMatchContainer>
  );
};

export default TrialMatch;
