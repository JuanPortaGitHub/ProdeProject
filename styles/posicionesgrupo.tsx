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
