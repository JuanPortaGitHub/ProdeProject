import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    /* margin-top: 3rem; */
    width: 95%;
  }
`;

export const StyledMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  @media (max-width: 600px) {
    /* margin-top: 3rem; */
    width: 100%;
  }
`;

export const StyledTitle = styled.h1`
  color: white;
  text-align: center;
`;

export const StyledMatchStatus = styled.h2`
  color: white;
  text-align: center;
`;
