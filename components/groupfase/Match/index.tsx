import { TextField } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import TeamContainer from "../../common/teamContainer";
import { StyledTextField } from "./styled";
import { t } from "../../../utils/dictionary";

export const Match = ({
  homeTeam,
  flagHomeTeam,
  awayTeam,
  flagAwayTeam,
}: Props) => {
  const [value, setValue] = useState<number>();

  const min = 0;
  const max = 10;
  return (
    <div
      id="primerid"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: "100%",
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
          <StyledTextField
            size="small"
            value={value}
            style={{
              width: "45px",
              height: "40px",
              textAlign: "center",
            }}
            inputProps={{
              min,
              max,
              style: { textAlign: "center" },
            }}
            onChange={(e) => {
              var value = parseInt(e.target.value, 10);
              if (value > max) value = max;
              if (value < min) value = min;

              setValue(value);
            }}
            type="number"
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
        <TeamContainer team={t(awayTeam)} flag={flagAwayTeam} home={false} />
        {/* {awayTeam} <Image src={flagAwayTeam} alt="" width={15} height={15} /> */}
      </>
    </div>
  );
};
