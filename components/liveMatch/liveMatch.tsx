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
import { GET_USERS_AND_POINTS } from "../../graphql/queries/prodesQueries";

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
import { Match } from "./match";

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
  } = useQuery(GET_USERS_AND_POINTS, {
    variables: { grupoId: +selectedUserGrupo, infoPartidosId: 1543912 },
  });

  const statusT = (status) => {
    if (status == "1H") return "Primer Tiempo";
    if (status == "2H") return "Segundo Tiempo";
    if (status == "HT") return "Entretiempo";
  };

  useEffect(() => {
    if (response !== null) {
      setCurrentMatches(
        response?.events.filter(
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
          <StyledTitle>
            {currentMatches.length > 1 ? "Partidos" : "Partido"} en curso
          </StyledTitle>
          {currentMatches.map((match) => (
            <>
              <div>
                <Match match={match} group={selectedUserGrupo} />
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
