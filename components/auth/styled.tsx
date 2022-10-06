import styled from "styled-components";
import { Grid, Paper, Select } from "@mui/material";
import bg from "./backgroundCards.png"; // Import using relative path

export const StyledMainComponent = styled(Paper)`
  background-color: #ff155472;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  align-self: center;
  box-shadow: 0 8px 32px 0 rgba(255, 21, 84, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-width: 20%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledDivider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background-color: grey;

  svg {
    position: relative;
    display: block;
    width: calc(137% + 1.3px);
    height: 150px;
    z-index: 100;

    path {
      fill: transparent;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin: 0 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledCardTitle = styled.h3`
  color: white;
`;

export const StyledResultText = styled.h4`
  color: white;
`;

export const StyledInputLabel = styled("label")({
  display: "block",
  color: "white",
  marginBottom: "0.5rem",
});

export const StyledInput = styled("input")({
  backgroundColor: "#f1e1fc",
  borderRadius: "4px",
  border: "1px solid white",
  width: "100%",
  textSlign: "left",
  padding: "0.25rem",
  font: "inherit",
});

export const StyledIconSelect = styled(Select)({
  backgroundColor: "#f1e1fc",
  marginBottom: "0.5rem",
});

export const StyledControl = styled("div")({
  marginBottom: "0.5rem",
  display: "flex",
  flexDirection: "column",
});

export const IconsGrid = styled("div")({
  marginBottom: "0.5rem",
  display: "flex",
});

export const StyledButton = styled("button")({
  cursor: "pointer",
  font: "ihnerit",
  color: "white",
  backgroundColor: "rgb(255, 21, 84)",
  border: "1px solid white",
  borderRadius: "4px",
  padding: "0.5rem 2.5rem",
  margin: "0.5rem 1.5rem 0.5rem 1rem",
});
