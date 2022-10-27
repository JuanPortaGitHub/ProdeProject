import { useState, useRef, useContext, useId } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../graphql/queries/userQueries";
import { Avatar, Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import {
  StyledButton,
  StyledCardTitle,
  StyledControl,
  StyledInput,
  StyledInputLabel,
  StyledResultText,
} from "./styled";
import { motion } from "framer-motion";
import ToastContext from "../../context/toastContext";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PersonIcon from "@mui/icons-material/Person";
import { uploadFile } from "../../imageServer/config";
import { resizeFile } from "../../utils/reziserImage";
import IconButton from "@mui/material/IconButton";

const CreateUser = ({ createUserHandler }) => {
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [image, setImage] = useState();
  const toast = useContext(ToastContext);
  const [errorLogin, setErrorLogin] = useState("");
  const firstNameRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordRepeatInputRef = useRef();

  const [createNewUser, { error }] = useMutation(ADD_USER, {
    onCompleted(data) {
      toast.success("Usuario Creado!");
      createUserHandler();
      setImage();
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const submitHandler = async (event) => {
    event.preventDefault();

    setErrorLogin("");
    setLoadingLogin(() => true);

    if (
      passwordInputRef.current.value !== passwordRepeatInputRef.current.value
    ) {
      setLoadingLogin(() => false);
      setErrorLogin("Las contraseñas no coinciden");
      return;
    }
    const enteredFirstName = firstNameRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url = "";
    if (image) {
      try {
        console.log("Subiendo imagen");
        const imageSmall = await resizeFile(image);
        url = await uploadFile(imageSmall);
      } catch (err) {
        console.log(err);
      }
    }
    console.log("urlImage", url);
    await createNewUser({
      variables: {
        name: enteredFirstName,
        email: enteredEmail,
        recivedPassword: enteredPassword,
        image: url,
      },
    });
    setLoadingLogin(() => false);
  };

  const handleFileUpload = (e) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];
    if (file.size >= 1000000) {
      toast.error("Imagen muy pesada (max 1mb)");
      return;
    }
    setImage(file);
  };
  return (
    <form onSubmit={submitHandler}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <StyledCardTitle>Registro</StyledCardTitle>
        {loadingLogin ? (
          <CircularProgress style={{ color: "white", alignSelf: "center" }} />
        ) : (
          <>
            <StyledControl style={{ position: "relative" }}>
              <StyledInputLabel htmlFor="Nombre">Imagen</StyledInputLabel>
              <Avatar
                style={{ width: "5rem", height: "5rem", alignSelf: "center" }}
              >
                {image ? (
                  <Image
                    alt="Preview"
                    layout="fill"
                    src={URL.createObjectURL(image)}
                  />
                ) : (
                  <PersonIcon style={{ width: "80%", height: "80%" }} />
                )}
              </Avatar>

              <Button
                component="label"
                startIcon={<UploadFileIcon style={{ fontSize: "30" }} />}
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "50%",
                  padding: "0px",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleFileUpload}
                />
              </Button>
            </StyledControl>
            <StyledControl>
              <StyledInputLabel htmlFor="Nombre">Nombre</StyledInputLabel>
              <StyledInput
                type="text"
                id="Nombre"
                required
                ref={firstNameRef}
              />
            </StyledControl>
            <StyledControl>
              <StyledInputLabel htmlFor="email">Email</StyledInputLabel>
              <StyledInput
                type="email"
                id="email"
                style={{ textTransform: "lowercase" }}
                required
                ref={emailInputRef}
              />
            </StyledControl>
            <StyledControl>
              <StyledInputLabel htmlFor="password">Password</StyledInputLabel>
              <StyledInput
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </StyledControl>
            <StyledControl>
              <StyledInputLabel htmlFor="password">
                Repetir contraseña
              </StyledInputLabel>
              <StyledInput
                type="password"
                id="repeatpassword"
                required
                ref={passwordRepeatInputRef}
              />
            </StyledControl>
            <StyledButton
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Crear Cuenta
            </StyledButton>
            {errorLogin && <StyledResultText>{errorLogin}</StyledResultText>}
          </>
        )}
      </div>
    </form>
  );
};
export default CreateUser;
