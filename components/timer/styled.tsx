import styled from "styled-components";

export const TimerContainer = styled.div`
  width: 100%;
  height: 5rem;
  color: white;
  padding-right: 5rem;
  display: flex;
  justify-content: center;
  font-size: 1.5vw;
  align-items: center;
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
    font-size: 3vw;
    padding-right: 0;
    height: 2rem;
  }
`;

export const TimeUnit = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: baseline;
  /* padding-right: 1rem; */
  p {
    margin: 0;
    font-weight: 700;
    font-size: 4vw;
  }
  span {
    text-align: center;
  }
`;
