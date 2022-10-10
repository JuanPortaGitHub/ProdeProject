import { useState } from "react";
import { signIn } from "next-auth/react";
import CreateUser from "./createUser";
import LoginUser from "./loginUser";
import {
  StyledButton,
  StyledCardTitle,
  StyledControl,
  StyledInput,
  StyledInputLabel,
  StyledMainComponent,
  StyledResultText,
} from "./styled";
import GoogleIcon from "@mui/icons-material/Google";
import { motion } from "framer-motion";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const createUserHandler = () => {
    setIsLogin(true);
  };
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <StyledMainComponent
      as={motion.div}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        default: {
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        },
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      {!isLogin ? (
        <CreateUser createUserHandler={createUserHandler} />
      ) : (
        <>
          <LoginUser />
        </>
      )}

      <StyledButton
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => signIn("google")}
      >
        Inicia Sesión con Google <GoogleIcon />
      </StyledButton>
      <StyledButton
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={switchAuthModeHandler}
      >
        {isLogin ? "No tengo cuenta" : "Ya estoy registrado"}
      </StyledButton>
    </StyledMainComponent>
  );
};
export default AuthForm;
