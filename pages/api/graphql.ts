// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApolloServer } from "apollo-server-micro";
import type { NextApiRequest, NextApiResponse, PageConfig } from "next";
import { schema } from "../../graphql/schema";
import { createContext } from "../../graphql/context";

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", " Content-Type");
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
