import axios from "axios";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { StyledTitle } from "../../styles/groupfase";
import { t } from "../../utils/dictionary";
import { getCountry } from "../../utils/getGroups";
import TeamContainer from "../common/teamContainer";
import { StyledMatch } from "../groupfase/groupMatches/styled";
import { StyledContainer, StyledDate } from "../Match/styled";

const NextMatches = () => {
  const { response, loading, error } = useAxios(
    "https://www.thesportsdb.com/api/v1/json/50130162/eventsnextleague.php?id=4429"
  );

  const [next5Matches, setNext5Matches] = useState([]);

  useEffect(() => {
    if (response !== null) {
      const filterData = response?.events
        .sort(
          (a: any, b: any) =>
            +new Date(a.strTimestamp) - +new Date(b.strTimestamp)
        )
        .slice(0, 5);
      // console.log("filterData", filterData);
      const countriesData = getCountry();
      const matches = filterData.map((match: any) => {
        return {
          dateTime: match.strTimestamp,
          HomeTeam: countriesData.find((country) => {
            if (country.name === match.strHomeTeam) return country;
          }),
          AwayTeam: countriesData.find((country) => {
            if (country.name === match.strAwayTeam) return country;
          }),
        };
      });
      setNext5Matches(matches);
    }
  }, [response]);
  return (
    // <div id="calendario">
    <StyledContainer>
      <h3 style={{ color: "white", alignSelf: "center" }}>Próximos Partidos</h3>
      {next5Matches &&
        next5Matches.map((match: any) => (
          <>
            <StyledDate>
              {dayjs(match.dateTime).format("DD-MM-YY H:mm")}
            </StyledDate>
            <StyledMatch
              key={match.idEvent}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <TeamContainer
                team={t(match.HomeTeam.name)}
                flag={match.HomeTeam.badge}
                home={true}
              />
              VS
              <TeamContainer
                team={t(match.AwayTeam.name)}
                flag={match.AwayTeam.badge}
                home={false}
              />
            </StyledMatch>
          </>
        ))}
    </StyledContainer>
    // </div>
  );
};

export default NextMatches;
