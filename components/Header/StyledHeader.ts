import { TextField } from "@mui/material";
import styled from "styled-components";

export const AvatarSyled = styled.div`
  padding-right: 1vw;
  /* @media (max-width: 600px) {
    display: none;
  } */
`;

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  height: 100%;
  gap: 1rem;
  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  align-self: flex-start;
  align-items: center;
  width: 80%;
  gap: 2rem;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledTextfield = styled(TextField)`
  /* margin: 10px 10px 10px 10px !important; */
  background-color: white;
  width: 10rem;
  /* .MuiInputBase {
    background-color: #fff !important;
  } */
`;

export const StyledAnchor = styled.a`
  color: white;
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    height: 2px;
    background: linear-gradient(to right, #ff1554 0%, #900c3f 100%);
    width: 0;
    transition: width 0.3s;
    cursor: pointer;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const StyledListElement = styled.li`
  text-decoration: none;
  list-style: none;
  display: flex;
  gap: 1rem;
`;

export const StyledTitle = styled.h2`
  color: white;
  display: flex;
  @media (max-width: 600px) {
    align-self: flex-end;
  }
`;

export const StyledButton = styled.a`
  font-family: "Raleway", sans-serif;
  color: #fff;
  background-color: #5ca9fb;
  /* background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%); */
  background-image: linear-gradient(to right, #ff1554 0%, #ffc015 100%);
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

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22%;
  @media (max-width: 600px) {
    display: none;
  }
`;
