import { useState, useEffect } from "react";
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
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { asPath } = useRouter();
  const createUserHandler = () => {
    setIsLogin(true);
  };
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  useEffect(() => {
    asPath == "/#registrarse" && setIsLogin(() => true);
    asPath == "/#entrar" && setIsLogin(() => false);
  }, [asPath]);

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
      {/* <AnimatePresence> */}
      {!isLogin ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <LoginUser />
        </motion.div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CreateUser createUserHandler={createUserHandler} />
          </motion.div>
        </>
      )}
      {/* </AnimatePresence> */}

      <StyledButton
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={switchAuthModeHandler}
      >
        {!isLogin ? "No tengo cuenta" : "Ya estoy registrado"}
      </StyledButton>
      <StyledButton
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => signIn("google")}
      >
        Inicia Sesión con Google <GoogleIcon />
      </StyledButton>
    </StyledMainComponent>
  );
};
export default AuthForm;
