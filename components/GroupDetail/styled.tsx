import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import { TextField } from "@mui/material";

export const StyledItem = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: space-between;*/
  border-radius: 5px;
  /* border: 2px solid white; */
  &:hover {
    background: linear-gradient(
      to right,
      #ff1554 0%,
      rgba(185, 8, 246, 1),
      #900c3f 100%
    );
    cursor: pointer;
  }

  /* @media (max-width: 600px) {
    flex-direction: column;
    width: 65vw;
  } */
`;

export const StyledPlayerName = styled.h4`
  font-weight: 600;
`;

export const StyledPoints = styled.h3`
  font-weight: 900;
`;

export const StyledListItem = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StyledRanking = styled.h1`
  font-weight: 800;
  font-size: 4vw;
  color: white;
`;
