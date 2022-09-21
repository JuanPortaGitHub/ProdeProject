import { TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import TeamContainer from "../../common/teamContainer";
import { StyledTextField } from "./styled";

export const Match = ({
  homeTeam,
  flagHomeTeam,
  awayTeam,
  flagAwayTeam,
}: Props) => {
  return (
    <div
      id="primerid"
      style={{
        display: "flex",
        // width: "30vw",
        justifyContent: "center",
        alignItems: "center",
        gap: "6vw",
      }}
    >
      <>
        <TeamContainer team={homeTeam} flag={flagHomeTeam} home={true} />
        {/* <Image src={flagHomeTeam} alt="" width={100} height={100} /> {homeTeam}*/}
        <div style={{ display: "flex", alignItems: "center" }}>
          <StyledTextField
            size="small"
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
            }}
            inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
          />
          VS
          <StyledTextField
            size="small"
            style={{
              width: "40px",
              height: "40px",
              textAlign: "center",
            }}
            inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
          />
        </div>
        <TeamContainer team={awayTeam} flag={flagAwayTeam} home={false} />
        {/* {awayTeam} <Image src={flagAwayTeam} alt="" width={100} height={100} /> */}
      </>
    </div>
  );
};
