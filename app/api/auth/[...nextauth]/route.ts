import nextAuth, { NextAuthOptions } from "next-auth";
import { authOpt } from "../../../../src/auth-github";

const handlerAuth: NextAuthOptions = nextAuth(authOpt);

export { handlerAuth as GET, handlerAuth as POST };
