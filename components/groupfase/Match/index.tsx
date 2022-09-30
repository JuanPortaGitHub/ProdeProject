import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import TeamContainer from "../../common/teamContainer";
import {
  StyledTextField,
  StyledDate,
  Styledh4,
  StyledContainer,
} from "./styled";
import { t } from "../../../utils/dictionary";

interface Props {
  homeTeam: string;
  flagHomeTeam: string;
  awayTeam: string;
  flagAwayTeam: string;
  userHomeScore: string;
  userAwayScore: string;
  matchDate: Date;
}

export const Match = ({
  homeTeam,
  flagHomeTeam,
  awayTeam,
  flagAwayTeam,
  userHomeScore,
  userAwayScore,
  matchDate,
}: Props) => {
  const [homeScore, setHomeScore] = useState<number>();
  const [awayScore, setAwayScore] = useState<number>();

  // useEffect(() => {
  // setHomeScore(() => userHomeScore);
  // setAwayScore(() => userAwayScore);
  // }, [userHomeScore, userAwayScore]);
  // const date2 = new Date(matchDate * 1000);
  const date = dayjs.unix(matchDate).format("DD-MM-YY H:mm");

  const min = 0;
  const max = 10;
  return (
    <StyledContainer>
      <StyledDate>
        <Styledh4>{`${date} hs`}</Styledh4>
      </StyledDate>
      <div
        // id="primerid"
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
              // id={homeTeam}
              // defaultValue={+userHomeScore}
              // value={homeScore}
              value={+userHomeScore !== undefined ? +userHomeScore : homeScore}
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

                setHomeScore(value);
              }}
              type="number"
            />
            VS
            <StyledTextField
              size="small"
              value={+userAwayScore !== undefined ? +userAwayScore : awayScore}
              // value={awayScore}
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

                setAwayScore(value);
              }}
              type="number"
            />
          </div>
          <TeamContainer team={t(awayTeam)} flag={flagAwayTeam} home={false} />
          {/* {awayTeam} <Image src={flagAwayTeam} alt="" width={15} height={15} /> */}
        </>
      </div>
    </StyledContainer>
  );
};
