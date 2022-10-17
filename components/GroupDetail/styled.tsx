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
