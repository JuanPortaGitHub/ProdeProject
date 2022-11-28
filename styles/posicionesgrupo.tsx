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
  /* background-color: rgba(255, 255, 255, 0.447); */
  /* background-image: url("/gradiente.svg"); */
  background-image: url("/popUpbg.svg");
  /* margin: 3rem auto; */
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  padding: 1rem;
  text-align: center;
  align-self: center;
  /* box-shadow: 0 8px 32px 0 rgba(255, 21, 84, 0.37); */
  /* box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37); */
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-width: 380px;
  svg {
    color: white;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;
// export const StyledMainComponent = styled.div`
//   background-image: url("/gradiente.svg");
//   padding: 1rem;
//   margin: 3rem auto;
//   width: 40vw;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   /* padding: 0 2rem; */
//   border-radius: 16px;
//   box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
//   @media (max-width: 600px) {
//     width: 90vw;
//   }
// `;

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
  flex-direction: column;
  padding: 3rem 2rem;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  /* z-index: 30; */
  @media (max-width: 600px) {
    /* padding-top: 6rem; */
    /* height: 50vh; */
    padding: 0rem 2rem;
    padding-right: 0rem;
    gap: 0.5rem;
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
  padding: 0.1vw;
`;

export const StyledFlag = styled.div`
  display: flex;
  align-items: center;
  width: 3vw;
  /* height: 80%;
  width: 30%; */
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
