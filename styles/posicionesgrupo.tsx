import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import { TextField } from "@mui/material";

export const StyledDate = styled.div`
  align-self: center;
  text-align: center;
  color: white;
  width: 50%;
  height: 2rem;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to right,
    #ff1554 0%,
    rgba(185, 8, 246, 1),
    #900c3f 100%
  );

  h4 {
    color: white;
  }
`;

export const StyledMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  &:hover {
    border-radius: 17px;
    background: linear-gradient(
      to right,
      #ff1554 0%,
      rgba(185, 8, 246, 1),
      #900c3f 100%
    );
    cursor: pointer;
  }
`;

export const StyledScore = styled.div`
  border-radius: 17px;
  background-color: white;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 8vw;
    height: 30px;
  }
`;

export const StyledMainComponent = styled.div`
  /* background-color: rgba(255, 21, 84, 0.447); */
  background-color: rgba(255, 255, 255, 0.447);
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  align-self: center;
  /* box-shadow: 0 8px 32px 0 rgba(255, 21, 84, 0.37); */
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-width: 380px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5rem 2rem;
  gap: 2rem;
  margin-top: 2rem;

  /* z-index: 30; */
  @media (max-width: 600px) {
    padding-top: 6rem;
    /* height: 50vh; */
    padding-right: 0rem;
  }
`;

export const StyledGroupsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  background-color: white;
  width: 400px;
  height: 500px;
  margin-left: 50px;
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
    width: 65vw;
    /* height: 30vh; */
  }
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

export const StyledFlag = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  width: 30%;
`;

export const StyledGroupName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

export const StyleName = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  border: 1px solid red;
  width: 55%;
  align-self: flex-end;
  margin: 3px;
  border-radius: 5px;
  font-size: 1vw;
`;
