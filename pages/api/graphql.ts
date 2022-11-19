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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS"
  );

  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  try {
    await startServer;
    await apolloServer.createHandler({
      path: "/api/graphql",
    })(req, res);
  } catch (error: any) {
    console.error("Server error", error);
    return res.status(500).send({ success: false });
  }
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
