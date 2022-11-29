import TrialMatch from "../lastMatches/trialMatch";
import { List, ListItem } from "@mui/material";
import { StyledMatch, StyledMatchStatus } from "./styled";
import { getFlagUrl } from "../../utils/getFlagUrl";
import { t } from "../../utils/dictionary";
import { useQuery } from "@apollo/client";
import PersonIcon from "@mui/icons-material/Person";
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
import { GET_USERS_AND_POINTS } from "../../graphql/queries/prodesQueries";

const statusT = (status) => {
  if (status == "1H") return "Primer Tiempo";
  if (status == "2H") return "Segundo Tiempo";
  if (status == "HT") return "Entretiempo";
};

export const Match = ({ match, group }) => {
  const {
    loading: loadingDetails,
    error: errorDetails,
    data: dataDetails,
    refetch,
  } = useQuery(GET_USERS_AND_POINTS, {
    variables: { grupoId: +group, infoPartidosId: match.idEvent },
  });

  refetch({ grupoId: +group, infoPartidosId: match.idEvent });

  return (
    <>
      <StyledMatchStatus>{statusT(match.strStatus)}</StyledMatchStatus>
      <StyledMatch key={"rober"}>
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
          {dataDetails?.GetUsersAndPointsByMatch?.map((jugador: any, i) => (
            <div key={jugador.Usuario.id}>
              <StyledItem style={{ height: "4vh" }}>
                <ListItem key={jugador.Usuario.id}>
                  <StyledListAvatar>
                    <StyledAvatar>
                      {jugador.Usuario.image ? (
                        <Image
                          src={jugador.Usuario.image}
                          alt={"foto-usuario"}
                          layout="fill"
                        />
                      ) : (
                        <PersonIcon />
                      )}
                    </StyledAvatar>
                  </StyledListAvatar>
                  <StyledListItem>
                    <StyledPlayerName>{jugador.Usuario.name}</StyledPlayerName>
                    <StyledPoints>+{jugador.Puntos || 0}</StyledPoints>
                    <StyledPlayerName>Pts</StyledPlayerName>
                  </StyledListItem>
                </ListItem>
              </StyledItem>
            </div>
          ))}
        </List>
      </StyledGridItem>
    </>
  );
};
