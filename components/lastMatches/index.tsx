import axios from "axios";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import { StyledTitle } from "../../styles/groupfase";
import { t } from "../../utils/dictionary";
import { getFlagUrl } from "../../utils/getFlagUrl";
import TeamContainer from "../common/teamContainer";
import TrialMatch from "./trialMatch";
// import { StyledMatch } from "../groupfase/groupMatches/styled";
import { StyledContainer } from "../Match/styled";
import { StyledDate, StyledVs, StyledMatch, StyledTextField } from "./styled";

const LastMatches = () => {
  const { response, loading, error } = useAxios(
    "https://www.thesportsdb.com/api/v1/json/50130162/eventspastleague.php?id=4429"
  );

  const [last5Matches, setLast5Matches] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setLast5Matches(response?.events.slice(0, 5));
    }
  }, [response]);
  return (
    // <div id="calendario">
    <StyledContainer>
      <h3 style={{ color: "white", alignSelf: "center" }}>Últimos Partidos</h3>
      {last5Matches &&
        last5Matches.map((match: any) => (
          <React.Fragment key={match.idEvent}>
            <StyledDate>
              {dayjs(new Date(match.dateEvent))
                .add(1, "day")
                .format("DD-MM-YY")}
            </StyledDate>
            <StyledMatch
              key={match.idEvent}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
            >
              <TrialMatch
                homeTeam={t(match.strHomeTeam)}
                flagHomeTeam={getFlagUrl(match.strHomeTeam)}
                awayTeam={t(match.strAwayTeam)}
                flagAwayTeam={getFlagUrl(match.strAwayTeam)}
                homeScore={+match.intHomeScore}
                awayScore={+match.intAwayScore}
              />
              {/* <TeamContainer
                team={t(match.strHomeTeam)}
                flag={getFlagUrl(match.strHomeTeam)}
                home={true}
              />
              <StyledTextField
                size="small"
                value={+match.intHomeScore}
                disabled
              />
              <StyledVs>VS</StyledVs>
              <StyledTextField
                size="small"
                value={+match.intAwayScore}
                disabled
              />
              <TeamContainer
                team={t(match.strAwayTeam)}
                flag={getFlagUrl(match.strAwayTeam)}
                home={false}
              /> */}
            </StyledMatch>
          </React.Fragment>
        ))}
    </StyledContainer>
    // </div>
  );
};

export default LastMatches;
