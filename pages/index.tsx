import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { WindowSharp } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Paper from "@mui/material/Paper";
import AuthForm from "../components/auth/authform";
import { Match } from "../components/groupfase/Match";
import GroupFase from "../components/groupfase/groupfase";
import {
  StyledImageContainer,
  StyledPaperContainer,
  StyledContainer,
  StyledWorldCupImage,
  StyledButton,
  StyledButtonContainer,
  StyleMainComponent,
} from "../styles/styled";
import RegisterLogin from "../components/registerLogin/registerLogin";
import Header from "../components/Header/header";
import Sidebar from "../components/sidebar/sidebar";
import { StyledBody } from "../components/sidebar/styled";

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
  const { data: session, status } = useSession();
  // const classes = useStyles();

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
              <StyledImageContainer>
                <StyledPaperContainer>
                  <Paper elevation={3}>
                    <Carousel
                      autoPlay
                      showStatus={false}
                      showThumbs={false}
                      infiniteLoop
                      interval={2500}
                      showArrows={false}
                    >
                      {images.map((image, index) => (
                        <Image
                          key={index}
                          src={image.src}
                          alt="layout"
                          width={1000}
                          height={500}
                        />
                      ))}
                    </Carousel>
                  </Paper>
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
                <Link href="/#signUpForm">
                  <StyledButton>EMPEZA A JUGAR!</StyledButton>
                </Link>
              </StyledButtonContainer>
            </StyleMainComponent>
            <StyledContainer>
              <RegisterLogin />
            </StyledContainer>
          </>
        )}
        {session && (
          <>
            <StyledBody>
              <Sidebar />
            </StyledBody>
            <Header />
            <StyleMainComponent>
              <StyledImageContainer>
                <StyledPaperContainer>
                  <Paper elevation={3}>
                    <Carousel
                      autoPlay
                      showStatus={false}
                      showThumbs={false}
                      infiniteLoop
                      interval={2500}
                      showArrows={false}
                    >
                      {images.map((image, index) => (
                        <Image
                          key={index}
                          src={image.src}
                          alt="layout"
                          width={1000}
                          height={500}
                        />
                      ))}
                    </Carousel>
                  </Paper>
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
                <Link href="/#signUpForm">
                  <StyledButton>EMPEZA A JUGAR!</StyledButton>
                </Link>
              </StyledButtonContainer>
            </StyleMainComponent>
          </>
        )}
      </StyledContainer>
    </>
  );
}
