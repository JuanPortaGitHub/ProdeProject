import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import { TextField } from "@mui/material";

export const StyledPaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-self: center;
  gap: 1rem;
  @media (max-width: 600px) {
    /* width: 100vw;
    padding: 0 1.5rem; */
  }
`;

export const StyledGroupsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3rem;
  gap: 1rem;
  /* width: 100%; */
  padding: 1rem;
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    height: 50%;
    overflow-x: scroll;
    /* transform: translate(100px); */
  }
`;

export const StyleName = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid red;
  font-size: 1vw;
  width: 100%;
  align-self: flex-end;
  margin: 3px;
  border-radius: 5px;
  @media (max-width: 600px) {
    font-size: 4vw;
  }
`;

export const StyleResult = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid red;
  width: 20%;
  align-self: flex-end;
  margin: 3px;
  border-radius: 5px;
`;

export const StyledFlag = styled.div`
  display: flex;
  align-items: center;
  /* height: 80%; */
  width: 3vw;
  @media (max-width: 600px) {
    width: 10vw;
  }
`;

export const StyledGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 2px solid white;
  &:hover {
    background: linear-gradient(
      to right,
      #ff1554 0%,
      rgba(185, 8, 246, 1),
      #900c3f 100%
    );
    cursor: pointer;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 40vw;
    /* height: 30vh; */
  }
`;

export const StyledTopScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* margin-top: 6rem; */
`;

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  padding-right: 2rem;
  /* z-index: 30; */
  @media (max-width: 600px) {
    padding-top: 6rem;
    /* height: 50vh; */
    padding-right: 0rem;
  }
`;

export const StyledFriendsGroup = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  height: 1.5rem;
  padding-left: 2rem;

  /* padding: 0; */

  div {
    padding: 0 0.3rem;
  }
  svg {
    color: white;
  }
  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const StyledIcon = styled.div`
  /* padding: 2rem; */
  /* color: white; */
  /* display: flex; */

  svg {
    font-size: 2vw;
    border: 1px solid red;
    border-radius: 50%;
  }
  /* align-items: center; */
  /* justify-content: flex-end; */
  /* background-image: url("/gradientBlack.svg"); */
  /* background-image: url("/transitionWaves2.svg"); */
  cursor: pointer;
`;

export const StyledRightborder = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    display: flex;
    align-items: center;
    svg {
      color: white;
    }
  }
  /* top: 40%; */
`;

export const StyledRightSquare = styled.div`
  width: 60px;
  position: absolute;
  height: 100%;
  right: 100%;
  background-image: linear-gradient(
    to right,
    rgba(93, 39, 66, 0),
    rgba(93, 39, 66, 1)
  );
`;

export const StyledTitle = styled.div`
  color: white;
  align-self: center;
  padding-left: 2rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-weight: 100;
  margin: 0;
  margin-bottom: 0.4rem;

  svg {
    font-size: 2vw;
    padding-right: 0.3rem;
    border-radius: 50%;
    cursor: pointer;
    background: linear-gradient(
      to right,
      #ff1554 0%,
      rgba(185, 8, 246, 1),
      #900c3f 100%
    );
    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 600px) {
    align-self: center;
    svg {
      font-size: 5vw;
    }
  }
`;

export const StyledImage = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* justify-content: space-between; */
  flex-direction: column;
  width: 20%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledprodeContainer = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: space-around;
  width: 80%;
  @media (max-width: 600px) {
    /* overflow-x: scroll; */
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledGroupName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

export const StyledTextfield = styled(TextField)`
  /* mar  gin: 10px 10px 10px 10px !important; */
  justify-self: flex-start;
  background-color: white;
  width: 10rem;
  margin-bottom: 5rem;
  /* .MuiInputBase {
    background-color: #fff !important;
  } */
`;

export const StyledH4 = styled.h4`
  color: white;
  margin: 0;
`;

export const StyledH1 = styled.h1`
  color: white;
  margin: 0;
  font-weight: 900;
`;

export const StyledGroupTeams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledTeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.5vw;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  height: 3rem;
  min-height: 0 !important;
  border-radius: 15px !important;
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAccordion = styled(Accordion)`
  border-radius: 5px;
`;
