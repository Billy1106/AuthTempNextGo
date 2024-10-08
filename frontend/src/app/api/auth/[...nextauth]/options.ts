import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "@/firebase/admin";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {},
      authorize: async ({ idToken }: any, _req): Promise<any> => {
        if (idToken) {
          try {
            const decoded = await auth.verifyIdToken(idToken);
            return { ...decoded };
          } catch (err) {
            console.error(err);
          }
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }): Promise<any> {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user.emailVerified = token.emailVerified;
      session.user.uid = token.uid;
      session.user.name = token.name;

      return session;
    },
    async redirect({ url, baseUrl }) {
      // If successful sign-in, redirect to the home page or another page of your choice
      if (url === baseUrl) {
        return baseUrl;
      }
      return "/signout";
    },
  },
  pages: {
    signIn: "/signin",
    error: "/error",
    newUser: "/signin",
  },
};

export { authOptions as default };
