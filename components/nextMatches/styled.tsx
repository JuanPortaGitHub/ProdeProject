import styled from "styled-components";

export const StyledDate = styled.div`
  align-self: center;
  text-align: center;
  color: white;
  width: 50%;
  height: 2rem;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to right,
    #ff1554 0%,
    rgba(185, 8, 246, 1),
    #900c3f 100%
  );

  h4 {
    color: black;
  }
`;
