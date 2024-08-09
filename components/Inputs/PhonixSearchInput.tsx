import React from "react";
import { IoIosSearch } from "react-icons/io";

function PhonixSearchInput() {
  return (
    <div>
      <div className="w-full flex">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <IoIosSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            id="search"
            name="search"
            className="block w-[500px] rounded-md border-0 bg-[#EFEFEF] py-1.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-[#EFEFEF] focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            placeholder="Search for products"
            type="search"
          />
        </div>
      </div>
    </div>
  );
}

export default PhonixSearchInput;
