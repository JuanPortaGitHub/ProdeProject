import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Paper from "@mui/material/Paper";
// import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import { WindowSharp } from "@mui/icons-material";
import AuthForm from "../components/auth/authform";
import { Match } from "../components/groupfase/Match";
import GroupFase from "../components/groupfase/groupfase";

const images = [
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
  // const classes = useStyles();
  return (
    <>
      <div id="main" className={styles.container}>
        <main>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.paperContainer}>
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
                        // layout="fill"
                        // objectFit="cover"
                        // objectPosition="center"
                        // priority={true}
                        alt="layout"
                        width={1000}
                        height={600}
                      />
                    ))}
                  </Carousel>
                </Paper>
              </div>
              <div className={styles.ImageWorldCup}>
                <Image
                  src={images[7].src}
                  // layout="fill"
                  // objectFit="cover"
                  objectPosition="center"
                  // priority={true}
                  alt="layout"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                paddingLeft: "30vw",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ backgroundColor: "#FF1554" }}
                onClick={scrollToDown}
              >
                EMPEZA A JUGAR!
              </Button>
            </div>
          </div>
        </main>
        <main>
          <div
            id="signUpForm"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.paperContainer}>
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
                        // layout="fill"
                        // objectFit="cover"
                        // objectPosition="center"
                        // priority={true}
                        alt="layout"
                        width={1200}
                        height={600}
                      />
                    ))}
                  </Carousel>
                </Paper>
              </div>
              <div className={styles.ImageWorldCup}>
                <AuthForm />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                paddingLeft: "30vw",
              }}
            ></div>
          </div>
        </main>
      </div>
      <main>
        <GroupFase />
      </main>
    </>
  );
}
