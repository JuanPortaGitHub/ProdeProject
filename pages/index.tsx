import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { signOut, useSession } from "next-auth/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  StyledImageContainer,
  StyledPaperContainer,
  StyledContainer,
  StyledWorldCupImage,
  StyledButton,
  StyledButtonContainer,
  StyleMainComponent,
  StyledMainTitle,
  CalendarContainer,
  StyleSubTitle,
  StyledUserGroupContainer,
  StyledGroup,
  WavesTransition,
  StyleSectionTitle,
  CalendarContent,
  WavesTransitionDown,
  StyledNextLastContainer,
  TimerContainer,
} from "../styles/styled";
import RegisterLogin from "../components/registerLogin/registerLogin";
import Header from "../components/Header/header";
import useToastContext from "../hooks/useToastContext";
import Sidebar from "../components/sidebar/sidebar";
import { StyledBody } from "../components/sidebar/styled";
import UserGroup from "../components/UserGroup";
import GroupDetail from "../components/GroupDetail";
import { useEffect } from "react";
// import Rules from "../components/rules/rules";
// import Rules2 from "../components/rules/rules2";
import NextMatches from "../components/nextMatches";
import GroupResults from "../components/groupResults/groupResults";
import LastMatches from "../components/lastMatches";
import Timer from "../components/timer/timer";
import Footer from "../components/footer/footer";
import dynamic from "next/dynamic";
// import { TimerContainer } from "../components/timer/styled";
const Rules2 = dynamic(() => import("../components/rules/rules2"), {
  ssr: false,
});

export const images = [
  {
    src: "/worldcup.jpg",
  },
  {
    src: "/worldcup2.jpg",
  },
  {
    src: "/worldcup3.jpg",
  },
  {
    src: "/worldcup4.jpg",
  },
  {
    src: "/worldcup5.jpg",
  },
  {
    src: "/worldcup6.jpg",
  },
  {
    src: "/worldcup7.jpg",
  },
  {
    src: "/worldcup8.png",
  },
  { src: "/fase_de_grupos.jpg" },
  {
    src: "/qatar2022.png",
  },
];

const scrollToDown = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
};

export default function Home() {
  const toast = useToastContext();
  const { data: session, status } = useSession();

  return (
    <>
      <StyledContainer>
        {!session && (
          <>
            <StyledBody>
              <Sidebar />
            </StyledBody>
            <Header />
            <StyleMainComponent>
              <TimerContainer>
                <Timer />
              </TimerContainer>
              <StyledImageContainer>
                <StyledPaperContainer>
                  <StyledMainTitle>Prode Trinche</StyledMainTitle>
                  <StyleSubTitle>Quién gana el mundial?</StyleSubTitle>
                  <StyleSubTitle>
                    Create un grupo con tus amigos y jugatelá
                  </StyleSubTitle>
                </StyledPaperContainer>
                <StyledWorldCupImage>
                  <Image
                    src={images[7].src}
                    objectPosition="center"
                    alt="layout"
                    width={500}
                    height={500}
                  />
                </StyledWorldCupImage>
              </StyledImageContainer>
              <StyledButtonContainer>
                <Link href="/#entrar">
                  <StyledButton>EMPEZA A JUGAR!</StyledButton>
                </Link>
              </StyledButtonContainer>
            </StyleMainComponent>
            <WavesTransition>
              <CalendarContainer id="calendario">
                <StyleSectionTitle>Calendario</StyleSectionTitle>
                <CalendarContent>
                  <StyledGroup>
                    <GroupResults />
                  </StyledGroup>
                  <NextMatches />
                  <LastMatches />
                </CalendarContent>
              </CalendarContainer>
            </WavesTransition>
            <StyledContainer>
              <RegisterLogin />
            </StyledContainer>
            <WavesTransition>
              <Rules2 />
            </WavesTransition>
          </>
        )}
        {session && (
          <>
            <StyledBody>
              <Sidebar />
            </StyledBody>
            <Header />
            <StyleMainComponent>
              <TimerContainer>
                <Timer />
              </TimerContainer>
              <StyledImageContainer>
                <StyledPaperContainer>
                  <StyledMainTitle>Prode Trinche</StyledMainTitle>
                  <StyleSubTitle>Quién gana el mundial?</StyleSubTitle>
                  <StyleSubTitle>
                    Create un grupo con tus amigos y jugatelá
                  </StyleSubTitle>
                </StyledPaperContainer>
                <StyledWorldCupImage>
                  <Image
                    src={images[7].src}
                    objectPosition="center"
                    alt="layout"
                    width={500}
                    height={500}
                  />
                </StyledWorldCupImage>
              </StyledImageContainer>
              <StyledButtonContainer>
                <Link href="/#CreateGroup">
                  <StyledButton>EMPEZA A JUGAR!</StyledButton>
                </Link>
              </StyledButtonContainer>
            </StyleMainComponent>
            <WavesTransition>
              <CalendarContainer id="calendario">
                <StyleSectionTitle>Calendario</StyleSectionTitle>
                <CalendarContent>
                  <StyledGroup>
                    <GroupResults />
                  </StyledGroup>
                  <NextMatches />
                  <LastMatches />
                </CalendarContent>
              </CalendarContainer>
            </WavesTransition>
            {/* <WavesTransitionDown /> */}
            <UserGroup />
            <WavesTransition>
              <Rules2 />
            </WavesTransition>
            <Footer />
          </>
        )}
      </StyledContainer>
    </>
  );
}
