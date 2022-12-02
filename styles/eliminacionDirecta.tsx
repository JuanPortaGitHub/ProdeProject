import styled from "styled-components";

export const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  /* padding-right: 2rem; */
  /* z-index: 30; */
  @media (max-width: 600px) {
    padding-top: 0rem;
    /* height: 50vh; */
    padding-right: 0rem;
  }
`;

export const StyledTitle = styled.div`
  color: white;
  align-self: center;
  padding-left: 2rem;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  font-weight: 100;
  margin: 0;
  margin-bottom: 0.4rem;

  svg {
    font-size: 2vw;
    padding-right: 0.3rem;
    border-radius: 50%;
    cursor: pointer;
    background: linear-gradient(
      to right,
      #ff1554 0%,
      rgba(185, 8, 246, 1),
      #900c3f 100%
    );
    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 600px) {
    align-self: center;
    svg {
      font-size: 5vw;
    }
  }
`;

export const StyledFriendsGroup = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  height: 1.5rem;
  padding-left: 2rem;

  /* padding: 0; */

  div {
    padding: 0 0.3rem;
  }
  svg {
    color: white;
  }
  @media (max-width: 600px) {
    align-self: center;
  }
`;

export const StyledGroupsContainer = styled.div`
  display: grid;
  /* display: flex; */
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3rem;
  gap: 1rem;
  /* width: 100%; */
  padding: 1rem;
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    height: 50%;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    /* transform: translate(100px); */
  }
`;

export const StyledGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 2px solid white;
  &:hover {
    background: linear-gradient(
      to right,
      #ff1554 0%,
      rgba(185, 8, 246, 1),
      #900c3f 100%
    );
    cursor: pointer;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    width: 40vw;
    /* height: 30vh; */
  }
`;

export const StyledGroupName = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
`;

export const StyledH4 = styled.h4`
  color: white;
  margin: 0;
`;

export const StyledH1 = styled.h1`
  color: white;
  margin: 0;
  font-weight: 900;
`;

export const StyledGroupTeams = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledRightborder = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    display: flex;
    align-items: center;
    svg {
      color: white;
    }
  }
  /* top: 40%; */
`;

export const StyledprodeContainer = styled.div`
  margin-top: 2vh;
  display: flex;
  align-self: flex-start;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 600px) {
    /* overflow-x: scroll; */
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    /* overflow-x: scroll; */
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledImage = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  /* justify-content: center; */
  /* justify-content: space-between; */
  flex-direction: column;
  width: 30%;
  @media (max-width: 600px) {
    display: none;
  }
`;
