import { useState } from "react";

import Header from "./Header";
import CountryList from "./CountryList";

const MainPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const searchedCountries = data.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedRegion || country.region === selectedRegion)
    );
  });

  return (
    <>
      <Header
        onSearch={handleChange}
        searchValue={searchTerm}
        selectedRegion={selectedRegion}
        handleRegionChange={handleRegionChange}
      />
      <CountryList countries={searchedCountries} />
    </>
  );
};

export default MainPage;
