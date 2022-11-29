import { useEffect, useState } from "react";
import TrialMatch from "../lastMatches/trialMatch";
import { getFlagUrl } from "../../utils/getFlagUrl";
import { t } from "../../utils/dictionary";
import useAxios from "../../hooks/useAxios";
import { motion } from "framer-motion";
import {
  StyledContainer,
  StyledMatch,
  StyledTitle,
  StyledMatchStatus,
} from "./styled";
import { List, ListItem } from "@mui/material";
import NextMatches from "../nextMatches";
import PersonIcon from "@mui/icons-material/Person";
import { GroupInfoDetails } from "../GroupDetail/GroupInfoDetails";
import { useQuery } from "@apollo/client";
import {
  GET_GROUP_DETAIL,
  GET_RANKING_GROUP,
} from "../../graphql/queries/groupQueries";
import Image from "next/image";
import {
  StyledAvatar,
  StyledGridItem,
  StyledItem,
  StyledListAvatar,
  StyledListItem,
  StyledPlayerName,
  StyledPoints,
  StyledRanking,
} from "../GroupDetail/styled";
import LoadingIcon from "../common/loadingIconFolder/loading";

export const LiveMatch = ({
  selectPlayerHandler,
  selectedUserGrupo,
  setSelectedUserGrupo,
}) => {
  const [currentMatches, setCurrentMatches] = useState([]);
  const { response, loading, error } = useAxios(
    "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4429&s=2022"
  );
  const {
    loading: loadingDetails,
    error: errorDetails,
    data: dataDetails,
    refetch,
  } = useQuery(GET_RANKING_GROUP, {
    variables: { grupoId: +selectedUserGrupo },
  });

  const statusT = (status) => {
    if (status == "1H") return "Primer Tiempo";
    if (status == "2H") return "Segundo Tiempo";
    if (status == "HT") return "Entretiempo";
  };

  const otherResponse = [
    {
      idEvent: "1543912",
      strEvent: "Saudi Arabia vs Mexico",
      strHomeTeam: "Saudi Arabia",
      strAwayTeam: "Mexico",
      intHomeScore: null,
      intRound: "3",
      intAwayScore: null,
      intSpectators: null,
      strOfficial: "",
      strTimestamp: "2022-11-30T19:00:00+00:00",
      dateEvent: "2022-11-30",
      dateEventLocal: "2022-11-30",
      strTime: "19:00:00",
      strTimeLocal: "22:00:00",
      strTVStation: null,
      idHomeTeam: "136137",
      idAwayTeam: "134497",
      intScore: null,
      intScoreVotes: null,
      strResult: "",
      strVenue: "Lusail Iconic Stadium",
      strCountry: "Qatar",
      strCity: "",
      strPoster:
        "https://www.thesportsdb.com/images/media/event/poster/a2hfhn1661780237.jpg",
      strSquare:
        "https://www.thesportsdb.com/images/media/event/square/5f0tj21661780254.jpg",
      strFanart: null,
      strThumb:
        "https://www.thesportsdb.com/images/media/event/thumb/wy5gsc1661780220.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/event/banner/51wsrp1661780269.jpg",
      strMap: null,
      strTweet1: "",
      strTweet2: "",
      strTweet3: "",
      strVideo: "",
      strStatus: "Not Started",
      strPostponed: "no",
      strLocked: "unlocked",
    },
    {
      idEvent: "1543912",
      strEvent: "Saudi Arabia vs Mexico",
      strHomeTeam: "Saudi Arabia",
      strAwayTeam: "Mexico",
      intHomeScore: null,
      intRound: "3",
      intAwayScore: null,
      intSpectators: null,
      strOfficial: "",
      strTimestamp: "2022-11-30T19:00:00+00:00",
      dateEvent: "2022-11-30",
      dateEventLocal: "2022-11-30",
      strTime: "19:00:00",
      strTimeLocal: "22:00:00",
      strTVStation: null,
      idHomeTeam: "136137",
      idAwayTeam: "134497",
      intScore: null,
      intScoreVotes: null,
      strResult: "",
      strVenue: "Lusail Iconic Stadium",
      strCountry: "Qatar",
      strCity: "",
      strPoster:
        "https://www.thesportsdb.com/images/media/event/poster/a2hfhn1661780237.jpg",
      strSquare:
        "https://www.thesportsdb.com/images/media/event/square/5f0tj21661780254.jpg",
      strFanart: null,
      strThumb:
        "https://www.thesportsdb.com/images/media/event/thumb/wy5gsc1661780220.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/event/banner/51wsrp1661780269.jpg",
      strMap: null,
      strTweet1: "",
      strTweet2: "",
      strTweet3: "",
      strVideo: "",
      strStatus: "1H",
      strPostponed: "no",
      strLocked: "unlocked",
    },
    {
      idEvent: "1543912",
      strEvent: "Saudi Arabia vs Mexico",
      strHomeTeam: "Saudi Arabia",
      strAwayTeam: "Mexico",
      intHomeScore: null,
      intRound: "3",
      intAwayScore: null,
      intSpectators: null,
      strOfficial: "",
      strTimestamp: "2022-11-30T19:00:00+00:00",
      dateEvent: "2022-11-30",
      dateEventLocal: "2022-11-30",
      strTime: "19:00:00",
      strTimeLocal: "22:00:00",
      strTVStation: null,
      idHomeTeam: "136137",
      idAwayTeam: "134497",
      intScore: null,
      intScoreVotes: null,
      strResult: "",
      strVenue: "Lusail Iconic Stadium",
      strCountry: "Qatar",
      strCity: "",
      strPoster:
        "https://www.thesportsdb.com/images/media/event/poster/a2hfhn1661780237.jpg",
      strSquare:
        "https://www.thesportsdb.com/images/media/event/square/5f0tj21661780254.jpg",
      strFanart: null,
      strThumb:
        "https://www.thesportsdb.com/images/media/event/thumb/wy5gsc1661780220.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/event/banner/51wsrp1661780269.jpg",
      strMap: null,
      strTweet1: "",
      strTweet2: "",
      strTweet3: "",
      strVideo: "",
      strStatus: "Not Started",
      strPostponed: "no",
      strLocked: "unlocked",
    },
    {
      idEvent: "1543912",
      strEvent: "Saudi Arabia vs Mexico",
      strHomeTeam: "Saudi Arabia",
      strAwayTeam: "Mexico",
      intHomeScore: null,
      intRound: "3",
      intAwayScore: null,
      intSpectators: null,
      strOfficial: "",
      strTimestamp: "2022-11-30T19:00:00+00:00",
      dateEvent: "2022-11-30",
      dateEventLocal: "2022-11-30",
      strTime: "19:00:00",
      strTimeLocal: "22:00:00",
      strTVStation: null,
      idHomeTeam: "136137",
      idAwayTeam: "134497",
      intScore: null,
      intScoreVotes: null,
      strResult: "",
      strVenue: "Lusail Iconic Stadium",
      strCountry: "Qatar",
      strCity: "",
      strPoster:
        "https://www.thesportsdb.com/images/media/event/poster/a2hfhn1661780237.jpg",
      strSquare:
        "https://www.thesportsdb.com/images/media/event/square/5f0tj21661780254.jpg",
      strFanart: null,
      strThumb:
        "https://www.thesportsdb.com/images/media/event/thumb/wy5gsc1661780220.jpg",
      strBanner:
        "https://www.thesportsdb.com/images/media/event/banner/51wsrp1661780269.jpg",
      strMap: null,
      strTweet1: "",
      strTweet2: "",
      strTweet3: "",
      strVideo: "",
      strStatus: "2H",
      strPostponed: "no",
      strLocked: "unlocked",
    },
  ];

  useEffect(() => {
    if (response !== null) {
      //   setCurrentMatches(
      //     response?.events.filter(
      //       (match) =>
      //         match.strStatus == "1H" ||
      //         match.strStatus == "2H" ||
      //         match.strStatus == "HT"
      //     )
      //   );
      setCurrentMatches(
        otherResponse?.filter(
          (match) =>
            match.strStatus == "1H" ||
            match.strStatus == "2H" ||
            match.strStatus == "HT"
        )
      );
    }
  }, [response]);
  return (
    <>
      {currentMatches.length > 0 ? (
        <StyledContainer>
          <StyledTitle>Partido en curso</StyledTitle>
          {/* <div style={{ width: "10vw" }}>
            <LoadingIcon />
          </div> */}
          {currentMatches.map((match) => (
            <>
              <div>
                <StyledMatchStatus>
                  {statusT(match.strStatus)}
                </StyledMatchStatus>
                <StyledMatch
                  key={"rober"}
                  // as={motion.div}
                  // whileHover={{ scale: 1.1 }}
                >
                  <TrialMatch
                    homeTeam={t(match.strHomeTeam)}
                    flagHomeTeam={getFlagUrl(match.strHomeTeam)}
                    awayTeam={t(match.strAwayTeam)}
                    flagAwayTeam={getFlagUrl(match.strAwayTeam)}
                    homeScore={+match.intHomeScore}
                    awayScore={+match.intAwayScore}
                  />
                </StyledMatch>
                <StyledGridItem item xs={12} md={6}>
                  <List>
                    {dataDetails?.GetRankingGroup?.PosicionesUsuarios.map(
                      (jugador: any, i) => (
                        <div
                          key={jugador.id}
                          onClick={() => selectPlayerHandler(jugador)}
                        >
                          <StyledItem
                            as={motion.div}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ListItem key={jugador.id}>
                              {/* <StyledRanking>{i + 1}</StyledRanking> */}
                              <StyledListAvatar>
                                <StyledAvatar>
                                  {jugador.imagenUsuario ? (
                                    <Image
                                      src={jugador.imagenUsuario}
                                      alt={"foto-usuario"}
                                      layout="fill"
                                    />
                                  ) : (
                                    <PersonIcon />
                                  )}
                                </StyledAvatar>
                              </StyledListAvatar>
                              <StyledListItem>
                                <StyledPlayerName>
                                  {jugador.nombreUsuario}
                                </StyledPlayerName>
                                <StyledPoints>
                                  +{jugador.sumaDePuntos}{" "}
                                </StyledPoints>
                                <StyledPlayerName>Pts</StyledPlayerName>
                              </StyledListItem>
                            </ListItem>
                          </StyledItem>
                        </div>
                      )
                    )}
                  </List>
                </StyledGridItem>
              </div>
            </>
          ))}
        </StyledContainer>
      ) : (
        <div style={{ paddingTop: "5rem" }}>
          <NextMatches />
        </div>
      )}
    </>
  );
};
