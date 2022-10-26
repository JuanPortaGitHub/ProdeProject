import { CheckBox } from "@mui/icons-material";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { getFlagUrl } from "../../utils/getFlagUrl";

import {
  StyledCard,
  StyledImage,
  StyledMainContainer,
  StyledQuote,
  StyledQuoteContainer,
  StyledNav,
  StyledSelectedTab,
  StyledTab,
  StyledTabs,
  StyledUnderline,
  StyledMainContent,
} from "./styled";
import { Match } from "./trialMatch";

const tabs = [{ name: "Fase de Grupo" }, { name: "Eliminación Directa" }];

const Rules = () => {
  const [selectedTab, setSelectedTab] = useState("Fase de Grupo");

  return (
    <>
      <StyledMainContainer id="Reglas2">
        <StyledQuoteContainer>
          <StyledQuote>
            &quot;Ganar no es lo más importante, es lo único. Nadie se acuerda
            del segundo ¿Vos sabes quien pisó América después de Colón? - Yo
            no.&quot;
          </StyledQuote>
          <StyledImage>
            <Image
              src="/bilardo.png"
              alt=""
              width={300}
              layout="fixed"
              height={300}
            />
          </StyledImage>
        </StyledQuoteContainer>
        <StyledCard>
          {/* <StyledNav> */}
          <h1>Reglamento</h1>
          <StyledTabs>
            {tabs.map((item) =>
              selectedTab == item.name ? (
                <React.Fragment key={item.name}>
                  <AnimatePresence key={item.name}>
                    <StyledSelectedTab
                      key={item.name}
                      as={motion.div}
                      onClick={() => setSelectedTab(item.name)}
                    >
                      <p>{item.name}</p>
                      <StyledUnderline
                        key={item.name}
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        // layoutId="StyledUnderline"
                      />
                    </StyledSelectedTab>
                  </AnimatePresence>
                </React.Fragment>
              ) : (
                <StyledTab
                  key={item.name}
                  // as={motion.div}
                  as={motion.div}
                  onClick={() => setSelectedTab(item.name)}
                >
                  <p>{item.name}</p>
                </StyledTab>
              )
            )}
          </StyledTabs>
          <article>
            {selectedTab == "Fase de Grupo" ? (
              <StyledMainContent
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <p style={{ textAlign: "left" }}>
                    Las reglas son bastante simples: <br />
                    <br />
                    Acertar al ganador o acertar que haya empate son{" "}
                    <strong>3 puntos</strong>. <br />
                    Acertar cantidad de goles del local:{" "}
                    <strong>1 punto</strong>.
                    <br />
                    Acertar cantidad de goles del visitante:{" "}
                    <strong>1 punto</strong>. <br />
                    <br />
                    ejemplo: resultado del partido inaugural entre QATAR y
                    Ecuador
                    <br />
                    <br />
                  </p>
                  <Match
                    homeTeam="Qatar"
                    flagHomeTeam={getFlagUrl("Qatar")}
                    awayTeam="Ecuador"
                    flagAwayTeam={getFlagUrl("Ecuador")}
                    homeScore={1}
                    awayScore={2}
                  />
                  <p>
                    Ahora supongamo que tenemos el usuario TATO que puso lo
                    siguiente:
                    <br />
                    <br />
                  </p>
                  <Match
                    homeTeam="Qatar"
                    flagHomeTeam={getFlagUrl("Qatar")}
                    awayTeam="Ecuador"
                    flagAwayTeam={getFlagUrl("Ecuador")}
                    homeScore={0}
                    awayScore={2}
                  />
                  <p>
                    suma de puntos: <br />
                    <br />
                    <strong>3 pts</strong> (por pegar que pasa Ecuador) +{" "}
                    <strong>1 pt</strong> (por pegar los goles de visitante) ={" "}
                    <strong>4 pts</strong>.
                    <br />
                    <br />
                  </p>
                  <h3>+1 por Muchos goles:</h3>
                  <p>
                    <br />
                    En caso de acertar el resultado exacto y la suma de los
                    goles del local y del visitante es igual o mayor a{" "}
                    <strong>5 goles</strong> tendra un punto extra. <br />
                    ejemplo: Ahora supongamos que el resultado del partido
                    inaugural es:
                    <br />
                    <br />
                  </p>
                  <Match
                    homeTeam="Qatar"
                    flagHomeTeam={getFlagUrl("Qatar")}
                    awayTeam="Ecuador"
                    flagAwayTeam={getFlagUrl("Ecuador")}
                    homeScore={4}
                    awayScore={3}
                  />
                  <p>
                    Y para este partido TATO puse lo siguiente:
                    <br />
                    <br />
                  </p>
                  <Match
                    homeTeam="Qatar"
                    flagHomeTeam={getFlagUrl("Qatar")}
                    awayTeam="Ecuador"
                    flagAwayTeam={getFlagUrl("Ecuador")}
                    homeScore={4}
                    awayScore={3}
                  />
                  <p>
                    suma de puntos: <br />
                    <br />
                    <strong>3 pts</strong> (por el partido) +{" "}
                    <strong>1 pt</strong> (por pegar los goles de visitante) +{" "}
                    <strong>1 pt</strong> (por pegar los goles de local)+{" "}
                    <strong>1 pt</strong> (+1 por Muchos goles) =
                    <strong> 6 pts</strong>.
                  </p>
                </div>
              </StyledMainContent>
            ) : (
              <StyledMainContent
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <p>
                    En los partidos de Octavos, cuartos, semi, tercer puesto y
                    final se deberá especificar en qué instancia se define el
                    partido: 90&#39; (colocar resultado con ganador posible),
                    120&#39; (colocar resultado con ganador posible), penales
                    (colocar empate en tanta cantidad de goles y especificar
                    quién pasa de ronda). Sumará 3 pts acertar el equipo que
                    sigue en el Mundial, 1 punto extra quien adivine la
                    instancia, 1 punto extra por los goles de local o visitante
                    siempre y cuando sea dentro de la instancia elegida. Y
                    continúa el punto extra de aquellos que adivinen si el
                    partido tiene 5 goles o más.
                    <br />
                    <br />
                    ejemplo: Para este ultimo ejemplo imaginemos unos octavos de
                    final entre Paises Bajos e Inglaterra:
                    <br />
                    <br />
                  </p>
                  <Match
                    homeTeam="Netherlands"
                    flagHomeTeam={getFlagUrl("Netherlands")}
                    awayTeam="England"
                    flagAwayTeam={getFlagUrl("England")}
                    homeScore={0}
                    awayScore={2}
                  />
                  <p>
                    Ganador: Inglaterra
                    <br />
                    Etapa del partido: 90&#39;
                    <CheckBox />
                    <br />
                    <br />
                    Y para este partido TATO puse lo siguiente:
                    <br />
                    <br />
                  </p>
                  <Match
                    homeTeam="Netherlands"
                    flagHomeTeam={getFlagUrl("Netherlands")}
                    awayTeam="England"
                    flagAwayTeam={getFlagUrl("England")}
                    homeScore={1}
                    awayScore={1}
                  />
                  <p>
                    Ganador: Inglaterra
                    <br />
                    Etapa del partido: Penales
                  </p>
                  <CheckBox />
                  <p>
                    <br />
                    <br />
                    suma de puntos: <br />
                    <br />
                    <strong>3 pts</strong> Unicamente por adviinar quien pasa.
                  </p>
                </div>
              </StyledMainContent>
            )}
          </article>
        </StyledCard>
      </StyledMainContainer>
    </>
  );
};

export default Rules;
