import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import Header from "../components/Header/header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StyleMainComponent } from "../styles/styled";
import { ToastContextProvider } from "../context/toastContext";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const noAuthRequired = [
    "/",
    "/login",
    "/",
    "/#Rules",
    // "/#grupo1",
    // "/groupfase",
    // "/mi-prode/fase-de-grupo",
    "/mi-prode",
    // "/mi-prode/tabla-de-posiciones",
    "/mi-prode/posicionesgrupo",
    "/grupos/[...groupName]",
  ];

  const router = useRouter();

  return (
    <ApolloProvider client={client}>
      <ToastContextProvider>
        <SessionProvider session={session}>
          {noAuthRequired.includes(router.pathname) ? (
            <>
              {/* <StyleMainComponent> */}
              <Component {...pageProps} />
              {/* </StyleMainComponent> */}
            </>
          ) : (
            <ProtectedRoute>
              {/* <StyleMainComponent> */}
              <Component {...pageProps} />
              {/* </StyleMainComponent> */}
            </ProtectedRoute>
          )}
        </SessionProvider>
      </ToastContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;
