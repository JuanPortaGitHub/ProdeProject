import Image from "next/image";
import { getFlagUrl } from "../../utils/getFlagUrl";

import {
  StyledCard,
  StyledImage,
  StyledMainContainer,
  StyledQuote,
  StyledQuoteContainer,
} from "./styled";
import { Match } from "./trialMatch";

const Rules = () => {
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
              <Match
                homeTeam="Qatar"
                flagHomeTeam={getFlagUrl("Qatar")}
                awayTeam="Ecuador"
                flagAwayTeam={getFlagUrl("Ecuador")}
                homeScore={0}
                awayScore={2}
              />
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
              <Match
                homeTeam="Qatar"
                flagHomeTeam={getFlagUrl("Qatar")}
                awayTeam="Ecuador"
                flagAwayTeam={getFlagUrl("Ecuador")}
                homeScore={4}
                awayScore={3}
              />
              Y para este partido TATO puse lo siguiente:
              <br />
              <br />
              <Match
                homeTeam="Qatar"
                flagHomeTeam={getFlagUrl("Qatar")}
                awayTeam="Ecuador"
                flagAwayTeam={getFlagUrl("Ecuador")}
                homeScore={4}
                awayScore={3}
              />
              suma de puntos: <br />
              <br />
              <strong>3 pts</strong> (por el partido) + <strong>1 pt</strong>{" "}
              (por pegar los goles de visitante) + <strong>1 pt</strong> (por
              pegar los goles de local)+ <strong>1 pt</strong> (+1 por Muchos
              goles) =<strong> 6 pts</strong>.
            </p>
            <h3>Eliminacion Directa</h3>
            <p>
              En los partidos de Octavos, cuartos, semi y final se agregara un
              punto extra que dependera en que etapa del partido se defina. Es
              decir se deberá especificar si el partido termina dentro de los
              90&quot; (con el tiempo adicional), en los tiempos suplementarios,
              o en penales.
              <br />
              <br />
              ejemplo: Para este ultimo ejemplo imaginemos unos octavos de final
              entre Paises Bajos e Inglaterra:
              <br />
              <br />
              <Match
                homeTeam="Netherlands"
                flagHomeTeam={getFlagUrl("Netherlands")}
                awayTeam="England"
                flagAwayTeam={getFlagUrl("England")}
                homeScore={1}
                awayScore={1}
              />
              Etapa del partido: Penales
              <br />
              <br />
              Y para este partido TATO puse lo siguiente:
              <br />
              <br />
              <Match
                homeTeam="Netherlands"
                flagHomeTeam={getFlagUrl("Netherlands")}
                awayTeam="England"
                flagAwayTeam={getFlagUrl("England")}
                homeScore={1}
                awayScore={1}
              />
              Etapa del partido: Tiempos Extra
              <br />
              <br />
              suma de puntos: <br />
              <br />
              <strong>3 pts</strong> (por el empate en el partido) +{" "}
              <strong>1 pt</strong> (gol de visitante) + <strong>1 pt</strong>{" "}
              (gol de local) =<strong> 5 pts</strong>.
            </p>
          </article>
        </StyledCard>
      </StyledMainContainer>
    </>
  );
};

export default Rules;
