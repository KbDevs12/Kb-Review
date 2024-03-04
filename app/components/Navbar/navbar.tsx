import Link from "next/link";

import InputSearch from "./InputSearch";
import UserActionBtn from "./UserActionBtn";

const Navbar = () => {
  return (
    <header>
      <nav className="bg-dark md:w-full md:flex-row flex-col pb-4 md:end-2 md:pb-20">
        <div className="flex md:absolute md:pt-2 md:flex-row flex-row gap-5 md:gap-10 mx-auto px-4 mb-5 pb-4">
          <Link
            href="/"
            className=" text-secondary pt-4 hover:text-hover transition-all duration-300"
          >
            KB Review
          </Link>
          <Link
            href="/"
            className=" text-secondary pt-4 hover:text-hover transition-all duration-300"
          >
            Manga
          </Link>
          <Link
            href="/"
            className=" text-secondary pt-4 hover:text-hover transition-all duration-300"
          >
            Tentang
          </Link>
          <UserActionBtn />
        </div>
        <div className=" md:absolute md:end-2 md:pt-2">
          <InputSearch />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
