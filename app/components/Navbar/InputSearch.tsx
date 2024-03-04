"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: any) => {
    const keyword = searchRef.current?.value;
    if (!keyword || keyword.trim() == "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="md:flex md:items-center md:relative md:top-3 md:end-2 flex flex-row gap-4">
      <input
        type="text"
        className="w-full md:w-auto ml-4 md:ml-0 focus:outline-none focus:bg-white border border-gray-300 rounded-md py-1 px-3 text-sm"
        placeholder="Cari anime..."
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="md:mt-0 w-50 mr-4 md:mr-0 md:w-auto bg-accent2 hover:bg-opacity-50 text-white font-semibold py-1 px-3 rounded-md"
        onClick={handleSearch}
      >
        Cari
      </button>
    </div>
  );
};
export default InputSearch;
