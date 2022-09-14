import { useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/protectedRoute/protectedRoute";
import Header from "../components/Header/header";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api/graphql",
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const noAuthRequired = ["/", "/login", "/signup", "/groupfase"];

  const router = useRouter();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        {noAuthRequired.includes(router.pathname) ? (
          <>
            <Header handleDrawer={handleDrawer} />
            <Component {...pageProps} />
          </>
        ) : (
          <ProtectedRoute>
            <Header handleDrawer={handleDrawer} />
            <div
              style={{
                marginTop: "4rem",
              }}
            >
              <Component {...pageProps} />
            </div>
          </ProtectedRoute>
        )}
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
