import React from "react";
import Image from "next/image";
import {
  StyledOctavos,
  StyledTeams,
  StyledMatch,
  StyledLeftUpperBracket,
  StyledBrackets,
  StyledLeftBelowBracket,
  StyledLeftBracketsContainer,
  StyledUpperAndBelowContainer,
  StyledUnionLineContainer,
  StyledUnionLine,
  StyledCuartos,
  StyledBracketsToSemisContainer,
  StyledBracketsToSemis,
  StyledTopBracketsToSemis,
  StyledBelowBracketsToSemis,
  StyledUnionLineToSemisContainer,
  StyledSemis,
  StyledUnionLineToFinalContainer,
  StyledUnionLineToFinal,
  StyledFinal,
  StyledLeftBracketsToSemisContainer,
  StyledRightBracketsToSemisContainer,
  StyledLeftTopBracketsToSemis,
  StyledLeftBelowBracketsToSemis,
  StyledRightTopBracketsToSemis,
  StyledRightBelowBracketsToSemis,
  StyledLeftBracketsContainerToCuartos,
  StyledRightUpperBracket,
  StyledRightBelowBracket,
  StyledTitles,
  StyledOctavosTitles,
  StyledLeftCuartosTitles,
  StyledLeftSemisTitles,
  StyledLeftFinalTitle,
  StyledRightSemisTitles,
  StyledRightCuartosTitles,
  StyledRightOctavosTitles,
  StyledBraketsContainer,
  StyledMainContent,
  StyledImage,
} from "./styled";
import zIndex from "@mui/material/styles/zIndex";
import { WavesTransition } from "../../styles/styled";

const Brackets = () => {
  return (
    <>
      {/* <WavesTransition> */}
      <StyledBraketsContainer>
        {/* <StyledImage>
            <Image
              src="/worldcup8.png"
              alt="worldCup"
              object-fit="cover"
              objectPosition="center"
              // layout="fill"
              width={1000}
              height={1000}
            />
          </StyledImage> */}
        <StyledMainContent>
          <StyledTitles>
            <StyledOctavosTitles>OCTAVOS</StyledOctavosTitles>
            <StyledLeftCuartosTitles>CUARTOS</StyledLeftCuartosTitles>
            <StyledLeftSemisTitles>SEMIS</StyledLeftSemisTitles>
            <StyledLeftFinalTitle>FINAL</StyledLeftFinalTitle>
            <StyledRightSemisTitles>SEMIS</StyledRightSemisTitles>
            <StyledRightCuartosTitles>CUARTOS</StyledRightCuartosTitles>
            <StyledRightOctavosTitles>OCTAVOS</StyledRightOctavosTitles>
          </StyledTitles>
          <StyledBrackets>
            <StyledOctavos>
              <StyledMatch>
                <StyledTeams>1ro A</StyledTeams>
                <StyledTeams>2do B</StyledTeams>
              </StyledMatch>
              <StyledMatch>
                <StyledTeams>1ro C</StyledTeams>
                <StyledTeams>2do D</StyledTeams>
              </StyledMatch>
              <StyledMatch>
                <StyledTeams>1ro E</StyledTeams>
                <StyledTeams>2do F</StyledTeams>
              </StyledMatch>
              <StyledMatch>
                <StyledTeams>1ro G</StyledTeams>
                <StyledTeams>2do H</StyledTeams>
              </StyledMatch>
            </StyledOctavos>
            <StyledLeftBracketsContainer>
              <StyledUpperAndBelowContainer>
                <StyledLeftUpperBracket />
                <StyledLeftBelowBracket />
              </StyledUpperAndBelowContainer>
              <StyledUpperAndBelowContainer>
                <StyledLeftUpperBracket />
                <StyledLeftBelowBracket />
              </StyledUpperAndBelowContainer>
            </StyledLeftBracketsContainer>
            <StyledUnionLineContainer>
              <StyledUnionLine />
              <StyledUnionLine />
            </StyledUnionLineContainer>
            <StyledCuartos>
              <StyledMatch>
                <StyledTeams>equipo</StyledTeams>
                <StyledTeams>equipo</StyledTeams>
              </StyledMatch>
              <StyledMatch>
                <StyledTeams>equipo</StyledTeams>
                <StyledTeams>equipo</StyledTeams>
              </StyledMatch>
            </StyledCuartos>
            <StyledLeftBracketsToSemisContainer>
              <StyledLeftTopBracketsToSemis />
              <StyledLeftBelowBracketsToSemis />
            </StyledLeftBracketsToSemisContainer>
            <StyledUnionLineToSemisContainer>
              <StyledUnionLine />
            </StyledUnionLineToSemisContainer>
            <StyledSemis>
              <StyledMatch>
                <StyledTeams>equipo</StyledTeams>
                <StyledTeams>equipo</StyledTeams>
              </StyledMatch>
            </StyledSemis>
            <StyledUnionLineToFinalContainer>
              <StyledUnionLineToFinal />
            </StyledUnionLineToFinalContainer>
            <StyledFinal>
              <StyledMatch>
                <StyledTeams>equipo</StyledTeams>
                <StyledTeams>equipo</StyledTeams>
              </StyledMatch>
            </StyledFinal>
            <StyledUnionLineToFinalContainer>
              <StyledUnionLineToFinal />
            </StyledUnionLineToFinalContainer>
            <StyledSemis>
              <StyledMatch>
                <StyledTeams>equipo</StyledTeams>
                <StyledTeams>equipo</StyledTeams>
              </StyledMatch>
            </StyledSemis>
            <StyledUnionLineToSemisContainer>
              <StyledUnionLine />
            </StyledUnionLineToSemisContainer>
            <StyledRightBracketsToSemisContainer>
              <StyledRightTopBracketsToSemis />
              <StyledRightBelowBracketsToSemis />
            </StyledRightBracketsToSemisContainer>
            <StyledCuartos>
              <StyledMatch>
                <StyledTeams>equipo</StyledTeams>
                <StyledTeams>equipo</StyledTeams>
              </StyledMatch>
              <StyledMatch>
                <StyledTeams>equipo</StyledTeams>
                <StyledTeams>equipo</StyledTeams>
              </StyledMatch>
            </StyledCuartos>
            <StyledUnionLineContainer>
              <StyledUnionLine />
              <StyledUnionLine />
            </StyledUnionLineContainer>
            <StyledLeftBracketsContainerToCuartos>
              <StyledUpperAndBelowContainer>
                <StyledRightUpperBracket />
                <StyledRightBelowBracket />
              </StyledUpperAndBelowContainer>
              <StyledUpperAndBelowContainer>
                <StyledRightUpperBracket />
                <StyledRightBelowBracket />
              </StyledUpperAndBelowContainer>
            </StyledLeftBracketsContainerToCuartos>
            <StyledOctavos>
              <StyledMatch>
                <StyledTeams>1ro B</StyledTeams>
                <StyledTeams>2do A</StyledTeams>
              </StyledMatch>
              <StyledMatch>
                <StyledTeams>1ro D</StyledTeams>
                <StyledTeams>2do C</StyledTeams>
              </StyledMatch>
              <StyledMatch>
                <StyledTeams>1ro F</StyledTeams>
                <StyledTeams>2do E</StyledTeams>
              </StyledMatch>
              <StyledMatch>
                <StyledTeams>1ro H</StyledTeams>
                <StyledTeams>2do G </StyledTeams>
              </StyledMatch>
            </StyledOctavos>
          </StyledBrackets>
        </StyledMainContent>
      </StyledBraketsContainer>
      {/* </WavesTransition> */}
    </>
  );
};

export default Brackets;
