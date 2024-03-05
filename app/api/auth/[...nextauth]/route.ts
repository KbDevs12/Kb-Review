import nextAuth from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOpt } from "../../../../src/auth-github";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  const providers = authOpt;
  return await nextAuth(req, res, providers);
}
