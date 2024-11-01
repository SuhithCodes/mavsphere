import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { query } from "@/lib/db";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter both email and password");
        }

        try {
          const rows: any = await query("SELECT * FROM users WHERE email = ?", [
            credentials.email,
          ]);

          if (!rows || rows.length === 0) {
            throw new Error("No account found with this email");
          }

          const user = rows[0];
          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            throw new Error("Invalid email or password");
          }

          return {
            id: user.id,
            email: user.email,
            is_mentor: user.is_mentor,
          };
        } catch (error) {
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.is_mentor = user.is_mentor;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.email = token.email as string;
        session.user.id = token.sub as string;
        session.user.is_mentor = token.is_mentor as boolean;
      }
      return session;
    },
  },
  pages: {
    signIn: "/", // Using your landing page as the sign-in page
  },
});

export { handler as GET, handler as POST };
