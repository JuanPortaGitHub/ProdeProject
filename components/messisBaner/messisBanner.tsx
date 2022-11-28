import { StyledAnchor, StyledBanner, StyledP } from "./styled";
import Image from "next/image";
import Link from "next/link";

export const images = [
  {
    src: "/messi.jpeg",
  },
];

export const MessisBanner = () => {
  return (
    <StyledBanner>
      <Image
        src={images[0].src}
        objectPosition="center"
        alt="messi"
        width={100}
        height={100}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0",
        }}
      >
        <h3 style={{ margin: "0" }}>
          Si ganas el prode general entre todos los grupos te ganas un Messi
          luminoso!!!.
        </h3>
        <br />
        <StyledP>
          y sino podes conseguir el tuyo en
          <br />
          <StyledAnchor
            target="_blank"
            href="https://www.instagram.com/leducartelesled/"
            rel="noopener noreferrer"
          >
            https://www.instagram.com/leducartelesled/
          </StyledAnchor>
        </StyledP>
      </div>
    </StyledBanner>
  );
};
