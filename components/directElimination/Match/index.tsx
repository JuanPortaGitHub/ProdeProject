import { useEffect, useState, useRef } from "react";
import { Grid, TextField, Tooltip } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import { Controller } from "react-hook-form";
import TeamContainer from "../../common/teamContainer";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
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
  showDate: boolean;
  isEditing: boolean;
  userGroup: number;
  watch: any;
  penales: boolean;
  tiempoExtra: boolean;
  ganador: string;
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
  showDate,
  isEditing,
  userGroup,
  register,
  watch,
  penales,
  tiempoExtra,
  ganador,
  setValue,
}: Props) => {
  const date = new Date(+matchDate);

  const matchDateFormated = dayjs(date).format("DD-MM-YY H:mm");

  const today = new Date();

  const min = 0;
  const max = 10;

  let instance;
  if (penales) instance = "Penales";
  if (tiempoExtra) instance = "120";
  if (!penales && !tiempoExtra) instance = "90";

  useEffect(() => {
    if (watch[`${id}/${userGroup}/home`] > watch[`${id}/${userGroup}/away`]) {
      setValue(`${id}/${userGroup}/winnerTeam`, homeTeam);
    }
    if (watch[`${id}/${userGroup}/home`] < watch[`${id}/${userGroup}/away`]) {
      setValue(`${id}/${userGroup}/winnerTeam`, awayTeam);
    }
  }, [
    userHomeScore,
    userAwayScore,
    watch[`${id}/${userGroup}/home`],
    watch[`${id}/${userGroup}/away`],
  ]);

  useEffect(() => {}, []);

  return (
    <>
      <StyledContainer>
        {showDate && <StyledDate>{`${matchDateFormated} hs`}</StyledDate>}

        <Grid container alignItems="center" columnSpacing={0.5}>
          <>
            <Grid item xs={4.5} md={4.5}>
              <TeamContainer
                team={t(homeTeam)}
                flag={flagHomeTeam}
                home={true}
              />
            </Grid>
            <Grid
              item
              xs={1}
              md={1}
              display="flex"
              justifyContent="center"
              style={{ padding: 0 }}
            >
              <Controller
                name={`${id}/${userGroup}/home`}
                key={`${id}/${userGroup}/home`}
                control={control}
                defaultValue={userHomeScore}
                render={({ field: { onChange, value, ref, ...rest } }) => (
                  <Tooltip
                    title={
                      today >= date ? (
                        <>
                          <p>
                            No me quieras venir a piscudear 😏...el partido ya
                            arranco!
                          </p>
                        </>
                      ) : (
                        ""
                      )
                    }
                  >
                    <StyledTextField
                      {...rest}
                      size="small"
                      value={value}
                      name={`${id}/${userGroup}/home`}
                      disabled={today >= date || !isEditing}
                      inputProps={{
                        style: { textAlign: "center", color: "black" },
                        maxLength: 1,
                      }}
                      // onChange={onChange}
                      onChange={(e) => {
                        let value = parseInt(e.target.value, 10);
                        let valueToString;
                        if (value > max) value = max;
                        if (value < min) value = min;
                        return onChange(value);
                      }}
                      type="number"
                    />
                  </Tooltip>
                )}
              />
            </Grid>
            <Grid
              item
              xs={1}
              md={1}
              style={{ padding: "0" }}
              display="flex"
              justifyContent="center"
            >
              VS
            </Grid>
            <Grid
              item
              xs={1}
              md={1}
              display="flex"
              justifyContent="center"
              style={{ padding: 0, display: "flex", alignItems: "center" }}
            >
              <Controller
                name={`${id}/${userGroup}/away`}
                key={`${id}/${userGroup}/away`}
                control={control}
                defaultValue={userAwayScore}
                // defaultValue={userAwayScore !== undefined ? +userAwayScore : null}
                render={({ field: { onChange, value, ...rest } }) => (
                  <Tooltip
                    title={
                      today >= date ? (
                        <>
                          <p>
                            No me quieras venir a piscudear 😏...el partido ya
                            arranco!
                          </p>
                        </>
                      ) : (
                        ""
                      )
                    }
                  >
                    <StyledTextField
                      {...rest}
                      size="small"
                      name={`${id}/${userGroup}/away`}
                      value={value}
                      disabled={today >= date || !isEditing}
                      onChange={(e) => {
                        let value = parseInt(e.target.value, 10);
                        if (value > max) value = max;
                        if (value < min) value = min;
                        return onChange(value);
                      }}
                      type="number"
                    />
                  </Tooltip>
                )}
              />
            </Grid>
            <Grid item xs={4.5} md={4.5} style={{ padding: "0" }}>
              <TeamContainer
                team={t(awayTeam)}
                flag={flagAwayTeam}
                home={false}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              display="flex"
              justifyContent="center"
              style={{
                paddingTop: "1rem",
              }}
            >
              <FormControl>
                <FormLabel
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  EQUIPO QUE PASA
                </FormLabel>
                <RadioGroup
                  row
                  value={watch[`${id}/${userGroup}/winnerTeam`] || ganador}
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-groupd"
                >
                  <FormControlLabel
                    {...register(`${id}/${userGroup}/winnerTeam`)}
                    value={homeTeam}
                    disabled={
                      watch[`${id}/${userGroup}/home`] <
                      watch[`${id}/${userGroup}/away`]
                    }
                    control={<Radio style={{ color: "white" }} />}
                    label={t(homeTeam)}
                  />
                  <FormControlLabel
                    {...register(`${id}/${userGroup}/winnerTeam`)}
                    disabled={
                      watch[`${id}/${userGroup}/home`] >
                      watch[`${id}/${userGroup}/away`]
                    }
                    value={awayTeam}
                    control={<Radio style={{ color: "white" }} />}
                    label={t(awayTeam)}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              display="flex"
              justifyContent="center"
              style={{
                paddingTop: "1rem",
              }}
            >
              <FormControl>
                <FormLabel
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  INSTANCIA EN QUE SE RESUELVE EL PARTIDO
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue={instance}
                  style={{
                    paddingBottom: "2rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <FormControlLabel
                    {...register(`${id}/${userGroup}/instance`)}
                    // disabled={userHomeScore != userAwayScore}
                    value="90"
                    control={<Radio style={{ color: "white" }} />}
                    label="En los 90'"
                  />
                  <FormControlLabel
                    {...register(`${id}/${userGroup}/instance`)}
                    // disabled={userHomeScore != userAwayScore}
                    value="120"
                    control={<Radio style={{ color: "white" }} />}
                    label="En los 120'"
                  />
                  <FormControlLabel
                    {...register(`${id}/${userGroup}/instance`)}
                    disabled={
                      watch[`${id}/${userGroup}/home`] !=
                      watch[`${id}/${userGroup}/away`]
                    }
                    value="Penales"
                    control={<Radio style={{ color: "white" }} />}
                    label="Penales"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </>
        </Grid>
      </StyledContainer>
    </>
  );
};
