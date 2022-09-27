import Paper from "@mui/material/Paper";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const StyledMatchesContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 3rem;
    width: 100%;
  }
`;

export const StyledMatches = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
`;

export const StyledMatch = styled.div`
  &:hover {
    background: linear-gradient(
      to right,
      #ff1554 0%,
      rgba(185, 8, 246, 1),
      #900c3f 100%
    );
    cursor: pointer;
  }
`;
