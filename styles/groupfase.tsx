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
  width: 50%;
  padding: 1rem;
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    height: 50%;
    overflow-x: scroll;
  }
`;

export const StyleName = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid red;
  width: 75%;
  align-self: flex-end;
  margin: 3px;
  border-radius: 5px;
`;

export const StyledFlag = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  width: 30%;
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
    width: 45vw;
    /* height: 30vh; */
  }
`;

export const StyledTopScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-self: flex-end;
  height: 1.5rem;
  padding: 0;
  svg {
    color: white;
  }
`;

export const StyledTitle = styled.h4`
  color: white;
  align-self: flex-end;
  font-weight: 100;
  margin: 0;
  margin-bottom: 0.4rem;
`;

export const StyledImage = styled.div`
  display: flex;
  align-items: center;
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
  width: 80%;
  @media (max-width: 600px) {
    /* overflow-x: scroll; */
    flex-direction: column;
    width: 90%;
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
