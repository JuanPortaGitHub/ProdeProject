import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { Controller } from "react-hook-form";
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
  register: any;
  control: any;
  id: number;
  setFocus: () => void;
}

export const Match = ({
  id,
  homeTeam,
  flagHomeTeam,
  awayTeam,
  flagAwayTeam,
  userHomeScore,
  userAwayScore,
  matchDate,
  control,
  setFocus,
}: // autofocus,
Props) => {
  const [focuslocal, setFocuslocal] = useState(false);
  const [awayScore, setAwayScore] = useState<number>();
  // const date = dayjs.unix(matchDate).format("DD-MM-YY H:mm");
  const date = new Date(+matchDate);

  const dateFormated = dayjs(date).format("DD-MM-YY H:mm");

  const min = 0;
  const max = 10;

  return (
    <StyledContainer>
      <StyledDate>{`${dateFormated} hs`}</StyledDate>
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
            <Controller
              name={`${id}/home`}
              key={`${id}/home`}
              control={control}
              defaultValue={userHomeScore}
              render={({ field: { onChange, value, ref, ...rest } }) => (
                <StyledTextField
                  {...rest}
                  size="small"
                  ref={ref}
                  value={value}
                  name={`${id}/home`}
                  style={{
                    width: "45px",
                    height: "40px",
                    textAlign: "center",
                  }}
                  // autoFocus={+autofocus === id ? true : false}
                  inputProps={{
                    min,
                    max,
                    style: { textAlign: "center" },
                  }}
                  onChange={onChange}
                  // onChange={(e) => {
                  //   var value = parseInt(e.target.value, 10);
                  //   if (value > max) value = max;
                  //   if (value < min) value = min;

                  //   // setHomeScore(value);
                  //   console.log(value);
                  //   return onChange(value);
                  // }}
                  // type="number"
                />
              )}
            />
            VS
            <Controller
              name={`${id}/away`}
              key={`${id}/away`}
              control={control}
              defaultValue={userAwayScore}
              // defaultValue={userAwayScore !== undefined ? +userAwayScore : null}
              render={({ field: { onChange, value, ref, ...rest } }) => (
                <StyledTextField
                  {...rest}
                  size="small"
                  name={`${id}/away`}
                  ref={ref}
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
                  onChange={onChange}
                  // onChange={(e) => {
                  //   var value = parseInt(e.target.value, 10);
                  //   if (value > max) value = max;
                  //   if (value < min) value = min;

                  //   setAwayScore(value);
                  //   console.log(value);
                  //   return field.onChange(value);
                  // }}
                  // type="number"
                />
              )}
            />
          </div>
          <TeamContainer team={t(awayTeam)} flag={flagAwayTeam} home={false} />
        </>
      </div>
    </StyledContainer>
  );
};
