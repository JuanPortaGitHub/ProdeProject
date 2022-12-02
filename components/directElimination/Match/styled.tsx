import styled from "styled-components";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  border-radius: 50%;
  background-color: white;
  color: black;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  div {
    height: 100%;
  }
  input {
    text-align: center;
    padding: 0;
  }
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
    justify-content: center;
    input {
      padding: 0;
      text-align: center;
    }
  }
  fieldset {
    border: 0px;
  }
`;

export const StyledDate = styled.div`
  align-self: center;
  text-align: center;
  margin-bottom: 0.5rem;
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
  color: white;
  /* justify-content: center; */
  align-items: center;
  /* width: 100%; */
  /* height: 100vh; */
  /* align-content: space-between; */
  gap: 0.5rem;
  margin-bottom: 1rem;
  /* width: 100%; */
  @media (max-width: 600px) {
    width: 100%;
  }
`;
