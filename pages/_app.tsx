import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import Header from "../components/Header/header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StyleMainComponent } from "../styles/styled";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const noAuthRequired = ["/", "/login", "/", "/#grupo1"];

  const router = useRouter();

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        {noAuthRequired.includes(router.pathname) ? (
          <>
            {/* <StyleMainComponent> */}
            <Component {...pageProps} />
            {/* </StyleMainComponent> */}
          </>
        ) : (
          <ProtectedRoute>
            <StyleMainComponent>
              <Component {...pageProps} />
            </StyleMainComponent>
          </ProtectedRoute>
        )}
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
