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
  homeScore: number;
  awayScore: number;
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
          width: "100%",
          alignItems: "center",
        }}
      >
        <>
          <TeamContainer
            team={t(homeTeam) || ""}
            flag={flagHomeTeam || ""}
            home={true}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              color: "white",
            }}
          >
            <StyledTextField
              InputProps={{
                sx: {
                  "& input": {
                    textAlign: "center",
                    color: "black",
                  },
                },
              }}
              size="small"
              value={homeScore}
            />
            VS
            <StyledTextField
              InputProps={{
                sx: {
                  "& input": {
                    textAlign: "center",
                    color: "black",
                  },
                },
              }}
              size="small"
              value={awayScore}
            />
          </div>
          <TeamContainer
            team={t(awayTeam) || ""}
            flag={flagAwayTeam || ""}
            home={false}
          />
        </>
      </div>
    </StyledContainer>
  );
};
