import styled from "styled-components";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  border-radius: 17px;
  background-color: white;
  color: black;
  width: 3vw;
  height: 40px;
  text-align: center;

  @media (max-width: 600px) {
    width: 8vw;
    height: 30px;

    input {
      padding: 0px;
      padding-top: 1vw;
    }
  }
  /* fieldset {
    border-radius: 17px;
    background-color: white;
    color: black;
  } */
`;

export const StyledDate = styled.div`
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

export const Styledh4 = styled.h5`
  color: white;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;
