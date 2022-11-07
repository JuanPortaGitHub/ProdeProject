import styled from "styled-components";

export const StyledOctavos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledTeams = styled.div`
  /* background-color: #211c1e; */
  /* background-color: transparent; */
  /* background: linear-gradient(
    36deg,
    rgba(30, 29, 29, 1) 0%,
    rgba(30, 29, 29, 1) 0%,
    rgb(30, 29, 29) 100%
  ); */
  color: white;
  width: 7vw;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  /* height: 300px;
  width: 300px; */
  border: 5px solid #833ab4;

  border-radius: 10px;
  border: double 5px transparent;
  background-image: linear-gradient(#8a1437, #ff1554),
    linear-gradient(90deg, #ff1554, rgba(185, 8, 246, 1), #900c3f);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const StyledMatch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledLeftUpperBracket = styled.div`
  border-top: 1px solid white;
  border-right: 1px solid white;
  width: 2rem;
  height: 3.25rem;
  /* margin-top: 2rem; */
`;

export const StyledBrackets = styled.div`
  display: flex;
`;

export const StyledLeftBracketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
  margin-top: 0.25rem;
`;

export const StyledUpperAndBelowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  /* gap: 3rem; */
`;

export const StyledLeftBelowBracket = styled.div`
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  width: 2rem;
  height: 3.25rem;
  /* margin-top: 2rem; */
`;

export const StyledUnionLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.5rem;
  gap: 13rem;
`;

export const StyledUnionLine = styled.div`
  border-top: 1px solid white;
  width: 2rem;
`;

export const StyledCuartos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.25rem;
  gap: 8.5rem;
`;

export const StyledLeftBracketsToSemisContainer = styled.div`
  margin-top: 5.5rem;
`;

export const StyledLeftTopBracketsToSemis = styled.div`
  border-top: 1px solid white;
  border-right: 1px solid white;
  width: 2rem;
  height: 6.5rem;
`;

export const StyledLeftBelowBracketsToSemis = styled.div`
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  width: 2rem;
  height: 6.5rem;
`;

export const StyledUnionLineToSemisContainer = styled.div`
  margin-top: 11.5rem;
`;

export const StyledSemis = styled.div`
  margin-top: 9.25rem;
`;

export const StyledUnionLineToFinalContainer = styled.div`
  margin-top: 11.5rem;
`;

export const StyledUnionLineToFinal = styled.div`
  border-top: 1px solid white;
  width: 6rem;
`;

export const StyledFinal = styled.div`
  margin-top: 9.25rem;
`;

export const StyledRightBracketsToSemisContainer = styled.div`
  margin-top: 5.5rem;
`;

export const StyledRightTopBracketsToSemis = styled.div`
  border-top: 1px solid white;
  border-left: 1px solid white;
  width: 2rem;
  height: 6.5rem;
`;

export const StyledRightBelowBracketsToSemis = styled.div`
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  width: 2rem;
  height: 6.5rem;
`;

export const StyledLeftBracketsContainerToCuartos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 0.25rem;
`;

export const StyledRightUpperBracket = styled.div`
  border-top: 1px solid white;
  border-left: 1px solid white;
  width: 2rem;
  height: 3.25rem;
  /* margin-top: 2rem; */
`;

export const StyledRightBelowBracket = styled.div`
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  width: 2rem;
  height: 3.25rem;
  /* margin-top: 2rem; */
`;

export const StyledTitles = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

export const StyledOctavosTitles = styled.div`
  color: white;
`;

export const StyledLeftCuartosTitles = styled.div`
  margin-left: 5rem;
  color: white;
`;

export const StyledLeftSemisTitles = styled.div`
  margin-left: 5rem;
  color: white;
`;

export const StyledLeftFinalTitle = styled.div`
  margin-left: 8rem;
  color: white;
`;

export const StyledRightSemisTitles = styled.div`
  margin-left: 9rem;
  color: white;
`;

export const StyledRightCuartosTitles = styled.div`
  margin-left: 6rem;
  color: white;
`;

export const StyledRightOctavosTitles = styled.div`
  margin-left: 4rem;
  color: white;
`;

export const StyledBraketsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* overflow-x: scroll; */
`;

export const StyledMainContent = styled.div`
  /* z-index: 10; */
  /* position: relative; */
  overflow-x: scrollS;
`;

export const StyledImage = styled.div`
  z-index: 1;
  /* position: relative; */
  left: 50%;
  /* width: 100%; */
`;
