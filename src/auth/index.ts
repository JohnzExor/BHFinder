import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/services/User.service";
import { NextAuthOptions } from "next-auth";

export const BASE_PATH = "/api/auth";

export const authOptions: NextAuthOptions = {
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials.password) return null;

          const user = await loginUser(credentials.email, credentials.password);

          return { ...user, error: null };
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        return {
          ...token,
          id: user.id,
          username: user.username,
          email: user.email,
        };
      }
      return token;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          username: token.username,
          email: token.email,
        },
      };
    },
  },
};

export const handler = NextAuth(authOptions);
