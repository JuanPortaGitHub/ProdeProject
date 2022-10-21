import styled from "styled-components";

export const StyledMainComponent = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 90vh;
  @media (max-width: 600px) {
    /* overflow-y: ; */
    display: flex;
    /* flex-direction: column; */
    width: 100%;
    height: 45vh;
    overflow-x: scroll;
  }
`;

export const StyledP = styled.p`
  color: white;
  font-size: 1vw;
  justify-self: center;
  @media (max-width: 600px) {
    font-size: 3.2vw;
  }
`;

export const StyledFlag = styled.div`
  display: flex;
  align-items: center;
  /* height: 80%; */
  width: 2vw;
  @media (max-width: 600px) {
    width: 4vw;
  }
`;

export const StyledTitles = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 3.6fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr;
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 2.6fr;
`;

export const StyledGroup = styled.div`
  border: 1px solid white;
  @media (max-width: 600px) {
    width: 100vw;
  }
`;

export const DividerLine = styled.hr`
  border-top: 4px solid white;
  /* border-radius: 5px; */
`;

export const StyledGroupName = styled.h2`
  color: white;
  font-weight: 700;
`;

export const StyledGroupWithName = styled.div`
  display: flex;
  flex-direction: column;
`;
