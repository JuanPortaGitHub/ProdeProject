import Dialog from "@mui/material/Dialog";
import ShareIcon from "@mui/icons-material/Share";
import Image from "next/image";

import {
  StyledButtonCopy,
  StyledImage,
  StyledShareGroupContainer,
  StyledText,
} from "./syled";
import { useContext, useState } from "react";
import ToastContext from "../../context/toastContext";
import { width } from "@mui/system";

interface Props {
  groupName: string;
  show: boolean;
  setShow: (show: boolean) => void;
}

const ShareGroup = ({ groupName, show, setShow }: Props) => {
  const toast = useContext(ToastContext);

  const onCloseHandler = () => {
    setShow(false);
  };

  const shareGroupHandler = () => {
    const encondedUrl = groupName.replaceAll(" ", "-");
    const link = `http://localhost:3000/grupos/${encondedUrl}`;
    // const link = `${process.env.PRODUCTION}/${data.createGrupo.nombre}`;

    navigator.clipboard.writeText(link);
    setShow(false);
    toast.success(`grupo copiado!, pegalo en tu grupo de wssp!`);
  };

  return (
    <Dialog onClose={onCloseHandler} open={show}>
      <StyledShareGroupContainer>
        {/* <div style={{ backgroundImage: "url(/gradientBlack.svg)" }}> */}
        <StyledImage>
          <Image
            src={"/shareImage.jpg"}
            objectPosition="center"
            alt="layout"
            width={200}
            height={200}
          />
        </StyledImage>
        <StyledText>
          <h3>
            Copia el link y compartilo con tus amigos para que se unan a <br />
            {groupName}
          </h3>
        </StyledText>
        <StyledButtonCopy onClick={shareGroupHandler}>
          Copiar <ShareIcon />
        </StyledButtonCopy>
        {/* </div> */}
      </StyledShareGroupContainer>
    </Dialog>
  );
};

export default ShareGroup;
