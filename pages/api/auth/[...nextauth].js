import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "../../../lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { gql } from "@apollo/client";
import { client } from "../../../lib/apollo";
import { verifyPassword } from "../../../lib/auth";

const GetUserLogin = gql`
  query GetUserByEmail($email: String) {
    GetUserByEmail(email: $email) {
      id
      email
      name
      password
      image
    }
  }
`;
export const authOptions = {
  adapter: PrismaAdapter(prisma),
  debug: true,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      authorize: async ({ email, password }) => {
        const result = await client.query({
          query: GetUserLogin,
          variables: { email },
        });
        const userDB = result.data.GetUserByEmail;
        if (userDB === null) throw new Error("No se encontro usuario");
        const hashedPasswordDB = result.data.GetUserByEmail.password;

        const valid = await verifyPassword(password, hashedPasswordDB);
        if (!valid) throw new Error("Contraseña incorrecta");

        const userAccount = {
          id: result.data.GetUserByEmail.id,
          email: result.data.GetUserByEmail.email,
          name: result.data.GetUserByEmail.name,
          image: result.data.GetUserByEmail.image,
        };
        return userAccount;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id;
        const user = {
          email: token.email,
          image: null,
          name: token.name,
        };
      }
      return session;
    },
  },
};
export default NextAuth(authOptions);
