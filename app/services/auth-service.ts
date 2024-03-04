import { authOpt } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const LoginSession = async () => {
  const session = await getServerSession(authOpt);
  return session?.user;
};
