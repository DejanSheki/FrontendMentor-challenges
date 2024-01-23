import React from "react";
import Search from "./Search";
import DropdownMenu from "./DropdownMenu";

const Header = ({
  onSearch,
  searchValue,
  selectedRegion,
  handleRegionChange,
}) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center  px-6 sm:px-12 lg:px-20 dark:bg-veryDarkBlueBg bg-veryLightGrayBg py-8">
      <Search onSearch={onSearch} searchValue={searchValue} />
      <DropdownMenu
        selectedRegion={selectedRegion}
        handleRegionChange={handleRegionChange}
      />
    </header>
  );
};

export default Header;
