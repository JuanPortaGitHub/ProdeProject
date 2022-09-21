import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";

export const StyledPaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  /* flex-wrap: wrap; */
  /* width: 100vw; */
  align-self: center;
  gap: 1rem;
  @media (max-width: 600px) {
    /* width: 100vw;
    padding: 0 1.5rem; */
  }
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
