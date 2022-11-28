import styled from "styled-components";

export const StyledBanner = styled.div`
  width: 100%;
  height: 5rem;
  color: white;
  padding-right: 5rem;
  display: flex;
  justify-content: center;
  font-size: 1vw;
  align-items: center;
  text-align: center;
  gap: 2vw;
  /* background-color: #1e1d1d; */
  /* background-image: url("/gradientBlack.svg"); */
  background: linear-gradient(
    36deg,
    rgba(30, 29, 29, 1) 0%,
    rgba(30, 29, 29, 1) 0%,
    rgb(30, 29, 29) 100%
  );
  @media (max-width: 600px) {
    font-size: 2vw;
    padding-right: 0;
    height: 2rem;
  }
`;

export const StyledAnchor = styled.a`
  color: white;
  font-family: "Gotham-Font", sans-serif;
  cursor: pointer;
  /* left: 50%; */
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

export const StyledP = styled.p`
  width: 40%;
  align-self: center;
  margin: 0;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
