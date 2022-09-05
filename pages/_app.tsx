import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import { MenuAppbar } from "../components/MenuAppBar";
import { MenuDrawer } from "../components/MenuDrawer";
import { Box, CssBaseline } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
});

function MyApp({ Component, pageProps }: AppProps) {
  const noAuthRequired = ["/", "/login", "/signup"];
  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
      <AuthContextProvider>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <MenuAppbar open={open} handleDrawerOpen={handleDrawerOpen} />
              <MenuDrawer open={open} handleDrawerClose={handleDrawerClose} />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Component {...pageProps} />
              </Box>
            </Box>
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
