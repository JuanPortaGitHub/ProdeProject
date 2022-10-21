import styled from "styled-components";

export const StyleMainComponent = styled.div`
  margin-top: 6rem;
  height: calc(100vh - 6rem);
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-bottom: 6rem;
    height: 80vh;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  padding-left: 3rem;
  @media (max-width: 600px) {
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 100%;
  }
`;

export const StyledPaperContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50vw;
  align-self: center;
  @media (max-width: 600px) {
    width: 100vw;
    padding: 0 1.5rem;
  }
`;

export const CalendarContainer = styled.div`
  margin-left: 2rem;
  /* margin-top: 7rem; */
  padding-top: 7rem;
  flex-direction: column;
  display: flex;
  /* height: 100vh; */
  @media (max-width: 600px) {
    flex-direction: column;
    /* margin-right: 2rem; */
  }
`;

export const StyledGroup = styled.div`
  margin-top: 2rem;
  /* height: 100vh; */
  width: 40%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const StyleSectionTitle = styled.div`
  font-size: 6rem;
  align-self: center;
  font-weight: 600;

  background-color: red;

  /* Create the gradient. */
  background-image: linear-gradient(45deg, #f3ec78, #af4261);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  @media (max-width: 600px) {
    font-size: 4rem;
    margin-right: 2rem;
  }
`;

export const CalendarContent = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const StyledContainer = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.9;
  /* z-index: 5; v    b3 */
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const StyledUserGroupContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: grey;
  justify-content: space-evenly;
  gap: 30px;
`;

export const StyledWorldCupImage = styled.div`
  width: 40vw;
  @media (max-width: 600px) {
    width: 70vw;
  }
`;

export const StyledMainTitle = styled.h1`
  font-size: 4rem;
  text-align: center;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: 900;
  color: white;
`;

export const StyleSubTitle = styled.div`
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 1.5rem;
`;

export const WavesTransition = styled.div`
  aspect-ratio: 900/600;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("/transitionWaves2.svg");
`;

export const WavesTransitionDown = styled.div`
  aspect-ratio: 900/600;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("/transitionWavesDown.svg");
`;

export const StyledButton = styled.a`
  font-family: "Raleway", sans-serif;
  color: #fff;
  background-color: #5ca9fb;
  /* background-image: linear-gradient(to right, #00c78e 0%, #708881 100%); */
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

export const StyledButtonContainer = styled.div`
  display: flex;
  align-self: flex-start;
  padding-left: 30vw;
  @media (max-width: 600px) {
    padding-left: 0;
    display: flex;
    justify-content: center;
    width: 100vw;
  }
`;
