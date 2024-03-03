"use client";
import Link from "next/link";
import { useState } from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className=" bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="font-bold text-xl text-secondary hover:text-hover"
                >
                  KB Review
                </Link>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:ml-6 px-4 gap-5">
              <Link
                href="#"
                className="text-secondary hover:bg-accent hover:text-hover px-5 py-2 rounded-md text-sm font-medium"
              >
                Manga
              </Link>
              <Link
                href="#"
                className="text-secondary hover:bg-accent hover:text-hover px-5 py-2 rounded-md text-sm font-medium"
              >
                Tentang
              </Link>
            </div>
            <div className="flex-1 flex justify-end lg:justify-end">
              <div className="hidden md:flex md:items-center justify-end">
                <InputSearch />
              </div>
              <div className="flex md:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="bg-accent inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-hover hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-accent focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#"
                className="text-secondary hover:bg-accent hover:text-hover block px-3 py-2 rounded-md text-base font-medium"
              >
                Manga
              </Link>
              <Link
                href="#"
                className="text-secondary hover:bg-accent hover:text-hover block px-3 py-2 rounded-md text-base font-medium"
              >
                Tentang
              </Link>
              <InputSearch />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
