import { CheckBox } from "@mui/icons-material";
import { motion } from "framer-motion";
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
} from "./styled";
import { Match } from "./trialMatch";

const tabs = [{ name: "Fase de Grupo" }, { name: "Eliminación Directa" }];

const Rules = () => {
  const [selectedTab, setSelectedTab] = useState("Fase de Grupo");

  return (
    <>
      <StyledMainContainer id="Rules">
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
          <StyledNav>
            <ul>
              {tabs.map((item) =>
                selectedTab == item.name ? (
                  <StyledSelectedTab onClick={() => setSelectedTab(item.name)}>
                    {item.name}
                  </StyledSelectedTab>
                ) : (
                  <StyledTab onClick={() => setSelectedTab(item.name)}>
                    {item.name}
                  </StyledTab>
                )
              )}
              {/* {item === selectedTab ? (
                    <motion.div className="underline" layoutId="underline" />
                  ) : null} */}
            </ul>
          </StyledNav>
          <article>
            <h1>Reglamento</h1>
            <h3>Fase de Grupos</h3>
            <p style={{ textAlign: "left" }}>
              Las reglas son bastante simples: <br />
              <br />
              Acertar al ganador o acertar que haya empate son{" "}
              <strong>3 puntos</strong>. <br />
              Acertar cantidad de goles del local: <strong>1 punto</strong>.
              <br />
              Acertar cantidad de goles del visitante: <strong>
                1 punto
              </strong>. <br />
              <br />
              ejemplo: resultado del partido inaugural entre QATAR y Ecuador
              <br />
              <br />
              <Match
                homeTeam="Qatar"
                flagHomeTeam={getFlagUrl("Qatar")}
                awayTeam="Ecuador"
                flagAwayTeam={getFlagUrl("Ecuador")}
                homeScore={1}
                awayScore={2}
              />
              Ahora supongamo que tenemos el usuario TATO que puso lo siguiente:
              <br />
              <br />
              {/* <Match
                homeTeam="Qatar"
                flagHomeTeam={getFlagUrl("Qatar")}
                awayTeam="Ecuador"
                flagAwayTeam={getFlagUrl("Ecuador")}
                homeScore={0}
                awayScore={2}
              /> */}
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
              En caso de acertar el resultado exacto y la suma de los goles del
              local y del visitante es igual o mayor a <strong>
                5 goles
              </strong>{" "}
              tendra un punto extra. <br />
              ejemplo: Ahora supongamos que el resultado del partido inaugural
              es:
              <br />
              <br />
              {/* <Match
                homeTeam="Qatar"
                flagHomeTeam={getFlagUrl("Qatar")}
                awayTeam="Ecuador"
                flagAwayTeam={getFlagUrl("Ecuador")}
                homeScore={4}
                awayScore={3}
              /> */}
              Y para este partido TATO puse lo siguiente:
              <br />
              <br />
              {/* <Match
                homeTeam="Qatar"
                flagHomeTeam={getFlagUrl("Qatar")}
                awayTeam="Ecuador"
                flagAwayTeam={getFlagUrl("Ecuador")}
                homeScore={4}
                awayScore={3}
              /> */}
              suma de puntos: <br />
              <br />
              <strong>3 pts</strong> (por el partido) + <strong>1 pt</strong>{" "}
              (por pegar los goles de visitante) + <strong>1 pt</strong> (por
              pegar los goles de local)+ <strong>1 pt</strong> (+1 por Muchos
              goles) =<strong> 6 pts</strong>.
            </p>
            <h3>Eliminacion Directa</h3>
            <p>
              En los partidos de Octavos, cuartos, semi y final se elimina la
              opcion del empate ya que no existe, por lo que siempre se debera
              especificar quien pasa. Además se agregará un punto extra que
              dependera en que etapa del partido se defina. Es decir se deberá
              especificar el ganador y si el partido termina dentro de los
              90&#39; (con el tiempo adicional), en los tiempos suplementarios,
              o en penales.
              <br />
              <br />
              ejemplo: Para este ultimo ejemplo imaginemos unos octavos de final
              entre Paises Bajos e Inglaterra:
              <br />
              <br />
              {/* <Match
                homeTeam="Netherlands"
                flagHomeTeam={getFlagUrl("Netherlands")}
                awayTeam="England"
                flagAwayTeam={getFlagUrl("England")}
                homeScore={1}
                awayScore={1}
              /> */}
              Ganador: Paises Bajos
              <br />
              Etapa del partido: Penales
              <CheckBox />
              <br />
              <br />
              Y para este partido TATO puse lo siguiente:
              <br />
              <br />
              {/* <Match
                homeTeam="Netherlands"
                flagHomeTeam={getFlagUrl("Netherlands")}
                awayTeam="England"
                flagAwayTeam={getFlagUrl("England")}
                homeScore={1}
                awayScore={1}
              /> */}
              Ganador: Paises Bajos
              <br />
              Etapa del partido: Tiempos Extra <CheckBox />
              <br />
              <br />
              suma de puntos: <br />
              <br />
              <strong>1 pt</strong> (gol de visitante) + <strong>1 pt</strong>{" "}
              (gol de local) =<strong> 2 pts</strong>. <br />
              (No suma los 3 puntos por más que haya pegado el empate en los
              90&#39; ya que falla en poner que equipo finalmente pasa la ronda
              ni tampoco el punto extra porque no adivino en que etapa del
              partido se define.)
            </p>
          </article>
        </StyledCard>
      </StyledMainContainer>
    </>
  );
};

export default Rules;
