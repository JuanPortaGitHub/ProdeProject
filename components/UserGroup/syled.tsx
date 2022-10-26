import styled from "styled-components";
import { Grid, Paper, Select } from "@mui/material";
// import bg from "/backgroundCards.png"; // Import using relative path

export const StyledMainComponent = styled.div`
  /* background-color: rgba(255, 21, 84, 0.447); */
  background-color: rgba(255, 255, 255, 0.447);
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
  min-width: 20%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledGrid = styled(Grid)`
  background-image: url("/abstractbg.jpg");
  animation: moveIt 10s linear infinite;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  /* box-shadow: inset 0px 0px 40px 40px black; */
  background-size: cover;
  /* box-shadow: 0 0 20px 8px transparent inset; */
  opacity: 88%;
  /* padding-top: 17rem; */
  width: 100%;
  align-self: center;

  @media (max-width: 600px) {
    /* padding-top: 20rem; */
    width: 100%;
    background-size: 1100px 100%;
  }
  @keyframes moveIt {
    from {
      background-position: bottom left;
    }
    to {
      background-position: top right;
    }
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
  padding: 0.3vw;
  align-items: center;
  justify-content: space-between;
  border-radius: 50%;
  margin: 0 10px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledCardTitle = styled.h3`
  /* color: white; */
  color: black;
`;

export const StyledResultText = styled.h4`
  color: white;
`;

export const StyledInputLabel = styled("label")({
  display: "block",
  color: "white",
  color: "black",
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
  textTransform: "lowercase",
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
  justifyContent: "center",
});

export const StyledButton = styled("button")({
  cursor: "pointer",
  font: "ihnerit",
  color: "white",
  backgroundColor: "#1FBAE7",
  backgroundImage: "linear-gradient(to right, #1FBAE7 0%, #107694 100%)",
  border: "1px solid white",
  borderRadius: "25px",
  fontWeight: 500,
  padding: "0.5rem 1.5rem",
  marginTop: "1.5rem",
  border: 0,
  "&:hover": {
    backgroundImage: "linear-gradient(to right, #1FBAE7 0%, #1FBAE7 100%)",
  },
});

export const StyledButtonWithLinkComp = styled.button`
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
  margin-top: 1.5rem;
  border-radius: 25px;
  transition: all 0.5s linear;
  border: 0;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(to right, #ff1554 0%, #ff1554 100%);
  }
`;

export const StyledShareGroupContainer = styled.div`
  /* padding: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 35vw;
  border-radius: 20px;
  /* height: 300px;
  width: 300px; */
  border: 5px solid #833ab4;

  /* border-radius: 50%;   */
  border: double 5px transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(90deg, #ff1554, rgba(185, 8, 246, 1), #900c3f);
  background-origin: border-box;
  background-clip: content-box, border-box;
  svg {
    color: #ff1554;
  }

  @media (max-width: 600px) {
    width: 70vw;
  }
`;

export const StyledText = styled.div`
  padding: 2rem;
  /* color: white; */
  display: flex;
  align-items: center;
  /* width: 70%; */
  h3 {
    text-align: center;
  }
  /* background-image: url("/gradientBlack.svg"); */
  /* background-image: url("/transitionWaves2.svg"); */
  /* cursor: pointer; */
`;

export const StyledImage = styled.div`
  width: 40vw;
  display: flex;
  justify-content: center;
  /* padding-top: 4rem; */
  @media (max-width: 600px) {
    width: 70vw;
  }
`;

export const StyledButtonCopy = styled.button`
  width: 10rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
