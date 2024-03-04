import githubAuth from "next-auth/providers/github";
export const authOpt = {
  providers: [
    githubAuth({
      clientId: `${process.env.GITHUB_CLIENT}`,
      clientSecret: `${process.env.GITHUB_SECRET}`,
    }),
  ],
  secret: `${process.env.NEXTAUTH_SECRET}`,
};
