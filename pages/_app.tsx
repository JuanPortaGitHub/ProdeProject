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
import Header from "../components/Header/header";

function MyApp({ Component, pageProps }: AppProps) {
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
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
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
      ) : (
        <ProtectedRoute>
          <div
            style={{
              marginTop: "3rem",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <MenuAppbar open={open} handleDrawerOpen={handleDrawer} />
              <MenuDrawer open={open} handleDrawerClose={handleDrawer} />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />

                <Header handleDrawer={handleDrawer} />
                <Component {...pageProps} />
              </Box>
            </Box>
          </div>
        </ProtectedRoute>
      )}
      //{" "}
    </AuthContextProvider>
  );
}

export default MyApp;
