import styled from "styled-components";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 17px;
  }
`;

export const StyledTeamContainer = styled.div`
  border-top: 0.1rem solid #ff1554;
  border-bottom: 0.1rem solid #ff1554;
  width: 10rem;
  height: 2rem;
  background-color: #eeedeb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyleArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 0.5rem solid #ff1554;
`;

export const StyleArrowRightInner = styled.div`
  top: -1rem;
  right: 0.6rem;
  position: relative;
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 0.5rem solid #eeedeb;
`;

export const StyleArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-right: 0.5rem solid #ff1554;
`;

export const StyleArrowLeftInner = styled.div`
  top: -1rem;
  left: 0.1rem;
  position: relative;
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-right: 0.5rem solid #eeedeb;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;