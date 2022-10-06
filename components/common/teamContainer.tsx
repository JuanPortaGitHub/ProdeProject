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

interface Props {
  team: string;
  flag: string;
  home: string;
}

const TeamContainer = ({ team, flag, home }: Props) => {
  return (
    <>
      {home ? (
        <Container>
          <Image src={flag} alt="" width={50} height={30} />
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
          <Image src={flag} alt="" width={50} height={30} />
        </Container>
      )}
    </>
  );
};

export default TeamContainer;
