import Link from "next/link";
import { LoginSession } from "@/app/services/auth-service";
const UserActionBtn = async () => {
  const user = await LoginSession();
  const actLabel = user ? "Sign Out" : "Sign In";
  const actUrl = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className=" px-2 gap-4 items-center justify-center transition-all">
      <div className="flex justify-between items-center px-2">
        {user ? (
          <Link
            href="/users/dashboard"
            className="rounded-md text-secondary px-2  hover:text-hover text-center justify-center mt-2 transition-all"
          >
            Dashboard
          </Link>
        ) : null}
        <Link
          href={actUrl}
          className="rounded-md text-secondary px-2 hover:text-hover text-center justify-center mt-2 transition-all"
        >
          {actLabel}
        </Link>
      </div>
    </div>
  );
};
export default UserActionBtn;
