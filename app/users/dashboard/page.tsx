import { LoginSession } from "@/app/services/auth-service";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await LoginSession();
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2 mt-2">
        <h5 className=" font-bold">Dashboard</h5>
        <h1 className=" font-bold">Welcome {user?.name}</h1>
        {user?.image && (
          <Image
            className="rounded-md border-accent border-2 hover:-translate-y-1 transition duration-300"
            src={user?.image}
            alt="..."
            width={250}
            height={250}
          />
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <Link
          href=""
          className=" bg-dark text-secondary px-2 rounded-md hover:shadow-primary hover:shadow-md transition duration-300 transform hover:-translate-y-1"
        >
          My Favorites
        </Link>
        <Link
          href=""
          className=" bg-dark text-secondary px-2 rounded-md hover:shadow-primary hover:shadow-md transition duration-300 transform hover:-translate-y-1"
        >
          My Collection
        </Link>
        <Link
          href=""
          className=" bg-dark text-secondary px-2 rounded-md hover:shadow-primary hover:shadow-md transition duration-300 transform hover:-translate-y-1"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};
export default Page;
