import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import Paper from "@mui/material/Paper";

import AuthForm from "../../components/auth/authform";
import {
  StyledImageContainer,
  StyledPaperContainer,
  StyledContainer,
  StyledWorldCupImage,
  StyledButton,
  StyledButtonContainer,
} from "../../styles/styled";
import { images } from "../../pages/index";

const RegisterLogin = () => {
  return (
    <div
      id="registrarse"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <StyledImageContainer id="entrar">
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
                  width={1200}
                  height={600}
                />
              ))}
            </Carousel>
          </Paper>
        </StyledPaperContainer>
        <AuthForm />
      </StyledImageContainer>
    </div>
  );
};

export default RegisterLogin;
