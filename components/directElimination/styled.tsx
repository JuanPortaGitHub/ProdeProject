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
    width: 90%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  padding-right: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    margin-top: 3rem;
    padding-right: 0rem;
    width: 100%;
  }
  /* margin-bottom: 3rem; */
  /* gap: 10rem; */
`;

export const StyledMatches = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (max-width: 600px) {
    form {
      width: 100%;
    }
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media (max-width: 600px) {
    /* margin-top: 3rem; */
    width: 100%;
  }
`;

export const StyledButton = styled.button`
  width: 250px;
  align-self: center;
  font-family: "Raleway", sans-serif;
  color: #fff;
  /* background-color: #5ca9fb; */
  /* background-image: linear-gradient(to right, #00c78e 0%, #708881 100%); */
  /* background-image: linear-gradient(to right, #ff1554 0%, #ffc015 100%); */
  background: linear-gradient(
    to right,
    #ff1554 0%,
    rgba(185, 8, 246, 1),
    #900c3f 100%
  );
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.5s linear;
  border: 0;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(to right, #ff1554 0%, #ff1554 100%);
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  flex-direction: column;

  /* height: 0.5rem; */
`;

export const StyledResultText = styled.h4`
  color: white;
  align-self: center;
`;
