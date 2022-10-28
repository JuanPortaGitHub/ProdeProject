import styled from "styled-components";
import { Grid, Paper, Select, TextField } from "@mui/material";

export const StyledDate = styled.div`
  align-self: center;
  text-align: center;
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
    color: black;
  }
`;

export const StyledVs = styled.h4`
  color: white;
`;

export const StyledMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
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

export const StyledTextField = styled(TextField)`
  border-radius: 50%;
  background-color: white;
  color: black;
  width: 40px;
  height: 40px;
  input {
    text-align: center;
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    justify-content: center;
    input {
      padding: 0;
      text-align: center;
    }
    /* input {
      color: black;
      text-align: center;
    } */
  }
  fieldset {
    border: 0px;
  }
`;

export const StyledMatchContainer = styled.div`
  display: flex;
  /* padding: 0.5rem; */
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;
