import React from "react";
import { IoMdSearch } from "react-icons/io";

const Search = ({ onSearch, searchValue }) => {
  return (
    <div className="flex items-center dark:bg-darkBlue bg-white p-4 rounded-md md:w-2/5 w-full dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)]">
      <label htmlFor="search">
        <IoMdSearch className="dark:text-white text-veryDarkBlue" size={25} />
      </label>
      <input
        className="dark:bg-darkBlue bg-white placeholder-veryDarkBlue dark:text-white text-veryDarkBlue dark:placeholder-white placeholder:opacity-80 placeholder:focus:opacity-100 w-full  tracking-wide  ml-4"
        id="search"
        type="text"
        placeholder="Search for a country..."
        onChange={onSearch}
        value={searchValue}
      />
    </div>
  );
};

export default Search;
