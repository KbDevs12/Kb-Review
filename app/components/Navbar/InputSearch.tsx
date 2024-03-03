"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (event: any) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current?.value;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="md:flex md:items-center md:ml-15 mt-2 gap-4">
      <input
        type="text"
        className="w-full md:w-auto bg-gray-200 focus:outline-none focus:bg-white border border-gray-300 rounded-md py-1 px-3 text-sm"
        placeholder="Cari anime..."
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="mt-2 md:mt-0 w-full md:w-auto bg-accent2 hover:bg-opacity-50 text-white font-semibold py-1 px-3 rounded-md"
        onClick={handleSearch}
      >
        Cari
      </button>
    </div>
  );
};
export default InputSearch;
