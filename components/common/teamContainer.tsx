import React from "react";
import Image from "next/image";
import {
  StyledTeamContainer,
  StyleArrowLeft,
  StyleArrowRight,
  StyleArrowLeftInner,
  StyleArrowRightInner,
  Container,
} from "./styled";

const TeamContainer = ({ team, flag, home }) => {
  return (
    <>
      {home ? (
        <Container>
          <Image src={flag} alt="" width={60} height={60} />
          {/* <StyleArrowLeft> */}
          {/* <StyleArrowLeftInner /> */}
          {/* </StyleArrowLeft> */}
          <StyledTeamContainer>{team}</StyledTeamContainer>
          {/* <StyleArrowRight> */}
          {/* <StyleArrowRightInner /> */}
          {/* </StyleArrowRight> */}
        </Container>
      ) : (
        <Container>
          {/* <StyleArrowLeft>
            <StyleArrowLeftInner />
          </StyleArrowLeft> */}
          <StyledTeamContainer>{team}</StyledTeamContainer>
          {/* <StyleArrowRight>
            <StyleArrowRightInner />
          </StyleArrowRight> */}
          <Image src={flag} alt="" width={60} height={60} />
        </Container>
      )}
    </>
  );
};

export default TeamContainer;
