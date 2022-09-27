import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";

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
  @media (max-width: 600px) {
    /* height: 50vh; */
  }
`;

export const StyledImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledprodeContainer = styled.div`
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
