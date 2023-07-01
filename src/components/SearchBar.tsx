// "use client";
// import { useState } from "react";
import { redirect } from "next/navigation";

const placeholder = [
  "Enter driver's license or vehicle number plate",
  // "Search driver's name or license #",
  // "Search vehicle # plate",
];
const SearchBar = () => {
  // const [0, set0] = useState(0);
  let query = "";

  async function getRecords(formData: any) {
    "use server";
    redirect(`/search?q=${formData.get("q")}`);
  }
  return (
    <>
      {/* <div className="flex justify-center">
        <div className="bg-gray-300 rounded-lg p-1 mt-8 min-w-[200px]">
          <SwitchBtn
            title="Driver"
            active={0 === 0}
            onClick={() => set0(0)}
          />
          <SwitchBtn
            title="Vehicle"
            active={0 === 1}
            onClick={() => set0(1)}
          />
        </div>
      </div> */}
      <div className="space-y-10 max-w-2xl mx-auto mt-8">
        <form
          action={getRecords}
          className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500"
        >
          <div className="flex bg-gray-100 p-4 w-full space-x-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              className="bg-gray-100 outline-none w-full"
              type="text"
              name="q"
              placeholder={placeholder[0]}
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
          >
            <span>Search</span>
          </button>
        </form>
      </div>
    </>
  );
};

const SwitchBtn = ({
  title,
  active = false,
  onClick,
}: {
  title: string;
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      className={`relative w-1/2 ${
        active ? "bg-white border-gray-200 text-gray-900" : "text-gray-700"
      } rounded-md shadow-sm py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-transparent focus:z-10 sm:w-auto sm:px-8`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SearchBar;
