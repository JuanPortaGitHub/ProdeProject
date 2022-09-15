import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
