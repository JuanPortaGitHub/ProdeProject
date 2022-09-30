import Paper from "@mui/material/Paper";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  display: flex;
  justify-content: center;
  width: 50%;
`;

export const StyledMatchesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 3rem;
    width: 100%;
  }
  /* margin-bottom: 3rem; */
  /* gap: 10rem; */
`;

export const StyledMatches = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
`;

export const StyledDate = styled.div`
  color: white;
  width: 55%;
  height: 2rem;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: linear-gradient(
    to right,
    #ff1554 0%,
    rgba(185, 8, 246, 1),
    #900c3f 100%
  );
`;

export const Styledh4 = styled.h4`
  color: white;
`;

export const StyledMatch = styled.div`
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
