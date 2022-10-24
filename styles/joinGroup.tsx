import styled from "styled-components";

export const JoinGroupContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const StyleSectionTitle = styled.div`
  font-size: 3rem;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  width: 100%;
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
    font-size: 2rem;
    /* margin-right: 2rem; */
    text-align: center;
    padding-top: 5rem;
  }
`;

export const StyledSubTitle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding: 2rem;
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
  @media (max-width: 600px) {
    padding-top: 5rem;
  }
`;
