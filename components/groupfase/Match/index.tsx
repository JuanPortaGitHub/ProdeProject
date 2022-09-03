import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { StyledTextField } from "./styled";

export const Match = ({
  homeTeam,
  flagHomeTeam,
  awayTeam,
  flagAwayTeam,
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <>
        <Image src={flagHomeTeam} alt="" width={100} height={100} /> {homeTeam}
        <StyledTextField
          size="small"
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
          }}
          inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
        />
      </>
      <h1>VS</h1>
      <>
        <StyledTextField
          size="small"
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
          }}
          inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
        />
        {awayTeam} <Image src={flagAwayTeam} alt="" width={100} height={100} />
      </>
    </div>
  );
};
