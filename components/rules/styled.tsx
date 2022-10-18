import styled from "styled-components";
import { Grid, Paper, Select, TextField } from "@mui/material";
// import bg from "/backgroundCards.png"; // Import using relative path

export const StyledCard = styled.div`
  /* background-color: rgba(255, 21, 84, 0.447); */
  background-color: rgba(255, 255, 255, 0.447);
  /* font-weight: 700; */
  font-size: large;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  align-self: center;
  /* box-shadow: 0 8px 32px 0 rgba(255, 21, 84, 0.37); */
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 60%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledImage = styled.div`
  /* display: flex;
  justify-content: center;
  width: 50%;
  height: auto;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-radius: 50%;
  border-image-source: linear-gradient(
    to right,
    #ff1554 0%,
    rgba(185, 8, 246, 1),
    #900c3f 100%
  ); */
  overflow: hidden;
  height: 300px;
  width: 300px;
  border: 5px solid #833ab4;

  border-radius: 50%;
  border: double 5px transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(90deg, #ff1554, rgba(185, 8, 246, 1), #900c3f);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const StyledQuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  margin-top: 3rem;
  @media (max-width: 600px) {
    width: 100vw;
  }
  /* height: auto; */
`;

export const StyledQuote = styled.h2`
  color: white;
  /* position: Absolute; */
  width: 100%;
  font-weight: 400;
  text-align: center;
  /* text-shadow: 0 0 2px white; */
`;

export const StyledMainContainer = styled.div`
  /* background-color: black; */
  display: flex;
  /* align-items: center; */
  width: 100%;
  padding: 1rem;
  /* justify-content: center; */
  gap: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

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
      margin-left: 3vw;
      padding: 0px;
      padding-top: 1vw;
      border: 0px;
    }
  }
  fieldset {
    border: 0px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;
