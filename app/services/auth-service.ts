import { authOpt } from "../../src/auth-github";
import { getServerSession } from "next-auth";

export const LoginSession = async () => {
  const session = await getServerSession(authOpt);
  return session?.user;
};
