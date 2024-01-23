import React from "react";

const DropdownMenu = ({ selectedRegion, handleRegionChange }) => {
  return (
    <div className="mt-8 md:mt-0 dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)]">
      <label
        className="dark:bg-darkBlue bg-white rounded-md py-4 pr-4 dark:text-white text-veryDarkBlue"
        htmlFor="select"
      >
        <select
          name="select"
          id="select"
          aria-label="select"
          className="dark:bg-darkBlue bg-white p-4 pr-5 rounded-md dark:text-white text-veryDarkBlue"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
    </div>
  );
};

export default DropdownMenu;
