import styled from "styled-components";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import { TextField, Grid, ListItemAvatar, Avatar } from "@mui/material";

export const StyledItem = styled.div`
  /* display: flex;
  gap: 2rem; */
  margin: 2rem 0;
  /* align-items: center;
  justify-content: space-between;*/
  border-radius: 5px;
  background-color: white;
  border: 1px solid red;
  padding: 0 2rem;

  @media (max-width: 1280px) {
    padding: 0 1rem;
    /* margin-right: 2rem; */
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }

  li {
    width: 100%;
    /* display: flex;
    gap: 2rem; */
    /* margin: 1 0px; */
    padding: 0 0.5rem;
  }
  /* border: 2px solid white; */
  &:hover {
    background: linear-gradient(to right, #ff1554 0%, #b908f6, #900c3f 100%);
    cursor: pointer;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const StyledPlayerName = styled.h4`
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0;
  @media (max-width: 1280px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const StyledPoints = styled.h3`
  font-weight: 800;
  font-size: 5rem;
  position: absolute;
  /* color: white; */
  /* color: linear-gradient(to right, #ff1554 0%, #b908f6 100%); */
  /* border: 1px solid black; */
  background-color: red;
  background-image: linear-gradient(to right, #ff1554 0%, #b908f6 100%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  /* text-shadow: 0 0 10px black; */
  right: 40px;
  top: -25px;
  /* padding-bottom: 3rem; */
  margin: 0;

  @media (max-width: 1280px) {
    font-size: 3.5rem;
    top: -19px;
  }

  @media (max-width: 600px) {
    font-size: 3.2rem;
    top: -19px;
  }
`;

// export const StyledPoints = styled.h3`
// font-size: 6rem;
//   align-self: center;
//   font-weight: 600;
//   background-color: red;
//   background-image: linear-gradient(45deg, #f3ec78, #af4261);
//   background-size: 100%;
//   background-repeat: repeat;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -moz-background-clip: text;
//   -moz-text-fill-color: transparent;

//   `;

export const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  /* width: 100%; */
  padding-left: 6rem;
  @media (max-width: 1280px) {
    padding-left: 4rem;
  }
  @media (max-width: 600px) {
    padding-left: 4rem;
  }
`;

export const StyledRanking = styled.h1`
  font-weight: 800;
  font-size: 2vw;
  margin: 0;
  background-color: red;
  background-image: linear-gradient(to right, #ff1554 0%, #b908f6 100%);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  /* color: white; */
  @media (max-width: 600px) {
    font-size: 6vw;
  }
`;

export const ListContainer = styled.div`
  background-image: url("/popUpbg.svg");
  width: 40vw;
  /* padding: 0 2rem; */
  /* width: 90vw;
  padding: 0 0.5rem; */
  /* padding-top: 1rem; */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* background-size: cover; */
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.37);
  @media (max-width: 1030px) {
    width: 60vw;
  }

  @media (max-width: 600px) {
    width: 90vw;
    padding: 0 0.5rem;
  }
`;

export const StyledTitle = styled.div`
  font-size: 3rem;
  align-self: center;
  /* padding-top: 1rem; */
  padding: 2rem;
  font-weight: 600;
  background-color: red;
  background-image: linear-gradient(45deg, white, white);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  @media (max-width: 600px) {
    font-size: 10vw;

    /* margin-right: 2rem; */
  }
`;

export const StyledGroupDescription = styled.div`
  color: white;
  font-size: 1.5rem;
`;

export const StyledGroupAmount = styled.div`
  color: white;
  font-size: 1.2rem;
`;

export const StyledGroupName = styled.div`
  font-size: 2rem;
  align-self: center;
  font-weight: 600;
  background-color: red;
  background-image: linear-gradient(45deg, white, white);
  background-size: 100%;
  background-repeat: repeat;
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  @media (max-width: 600px) {
    font-size: 7vw;
    /* margin-right: 2rem; */
  }
`;

export const StyledGridItem = styled(Grid)`
  width: 90%;
  /* width: 100%; */
  @media (max-width: 1280px) {
    width: 100%;
    /* margin-right: 2rem; */
  }
  @media (max-width: 600px) {
    width: 100%;
    /* margin-right: 2rem; */
  }
`;

export const StyledListAvatar = styled(ListItemAvatar)`
  text-align: center;
  position: absolute;
  z-index: 10;
  padding-left: 3rem;
  @media (max-width: 1280px) {
    padding-left: 1.2rem;
    /* margin-right: 2rem; */
  }
  @media (max-width: 600px) {
    padding-left: 1.2rem;
    /* margin-right: 2rem; */
  }
`;

export const StyledAvatar = styled(Avatar)`
  width: 56px;
  height: 56px;

  @media (max-width: 600px) {
    width: 2.5rem;
    height: 2.5rem;
    /* margin-right: 2rem; */
  }
`;

export const StyledExitIcon = styled.div`
  /* right: -100%; */

  &:hover {
    border-radius: 50%;
    border: 2rem;
    background: linear-gradient(to right, #ff1554 0%, #b908f6, #900c3f 100%);
    cursor: pointer;
  }
`;

export const StyledTopModal = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
