import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import { MenuAppbar } from "../components/MenuAppBar";
import { MenuDrawer } from "../components/MenuDrawer";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../components/Header/header";
import { useSession } from "next-auth/react";
import { ConstructionOutlined } from "@mui/icons-material";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  // const { data: session, status } = useSession();

  // console.log(session, status);
  const noAuthRequired = ["/", "/login", "/signup", "/groupfase"];

  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <>
          <Header handleDrawer={handleDrawer} />
          <div
            style={{
              marginTop: "4rem",
            }}
          >
            <Component {...pageProps} />
          </div>
        </>
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
