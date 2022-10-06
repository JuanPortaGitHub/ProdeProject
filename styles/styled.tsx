import styled from "styled-components";

export const StyleMainComponent = styled.div`
  margin-top: 6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    margin-bottom: 6rem;
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
  flex-wrap: wrap;
  width: 50vw;
  align-self: center;
  @media (max-width: 600px) {
    width: 100vw;
    padding: 0 1.5rem;
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
`;
