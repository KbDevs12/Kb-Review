import nextAuth, { NextAuthOptions } from "next-auth";
import githubAuth from "next-auth/providers/github";
export const authOpt: NextAuthOptions = {
  providers: [
    githubAuth({
      clientId: `${process.env.GITHUB_CLIENT}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
  ],
  secret: `${process.env.NEXTAUTH_SECRET}`,
};
const handlerAuth = nextAuth(authOpt);

export { handlerAuth as GET, handlerAuth as POST };
