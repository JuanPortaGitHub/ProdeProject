import styled from "styled-components";

export const StyledMainComponent = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 90vh;
  width: 100%;
  @media (max-width: 600px) {
    /* overflow-y: ; */
    display: flex;
    /* flex-direction: column; */

    height: 45vh;
    gap: 1rem;
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

export const StyledTitle = styled.p`
  color: white;
  font-size: 1.2vw;
  font-weight: 600;
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
  background: linear-gradient(
    to right,
    #ff1554 0%,
    rgba(185, 8, 246, 1),
    #900c3f 100%
  );
  justify-content: center;
  grid-template-columns: 3.6fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr;
`;

export const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 3.6fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr 0.8fr;
`;

export const StyledGroup = styled.div`
  border: 1px solid white;
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

export const DividerLine = styled.hr`
  border-top: 4px solid #ff1554;
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
