import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

const CountryDetails = ({ data }) => {
    const { alpha3Code } = useParams();
    const [countryData, setCountryData] = useState([]);
    const [borderingCountry, setBorderingCountry] = useState([]);

    useEffect(() => {
        const countryName = data.filter((cuontryData) => cuontryData.alpha3Code === alpha3Code);
        countryName ? setCountryData(countryName) : (console.log('Error!!!'));

        const countryNameBorders = data.find((cuontryData) => cuontryData.alpha3Code === alpha3Code).borders;

        const borderNames = countryNameBorders ? countryNameBorders.map(name => {
            const borders = data.find(border => border.alpha3Code === name);
            return borders;
        }) : console.log('No land borders!!');
        borderNames ? setBorderingCountry(borderNames) : (console.log('Error!!!'));

    }, [alpha3Code]);



    return (
        <section className="flex flex-col dark:bg-veryDarkBlueBg bg-veryLightGrayBg px-6 sm:px-12 lg:px-20 pb-20 md:h-[91vh]">
            {countryData.map((country) => {
                return (
                    <div key={country.numericCode}>
                        <div className="flex justify-start items-center pt-10 pb-12 md:py-16 dark:bg-veryDarkBlueBg bg-veryLightGrayBg">
                            <Link to='/' className="dark:bg-darkBlue bg-white px-9 py-3 border-none rounded-md flex items-center text-veryDarkBlue dark:text-white tracking-wide font-light dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)]">
                                <FaArrowLeftLong size={18} type="button" className="stroke-1" /><span className="ml-3"> Back</span>
                            </Link>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
                            <div className="flex flex-wrap w-full md:w-[40%]">
                                <img src={country.flag} alt={`${country.name} flag`} />
                            </div>
                            <div className="w-full md:w-2/4">
                                <h1 className="dark:text-white text-veryDarkBlue font-extrabold text-2xl sm:text-3xl tracking-wide sm:my-8 my-5">{country.name}</h1>
                                <div className="flex flex-col md:flex-row items-start justify-between">
                                    <div>
                                        <p className="dark:text-white text-veryDarkBlue tracking-wide font-light"><strong className="font-semibold">Native Name:</strong> {country.name}</p>
                                        <p className="dark:text-white text-veryDarkBlue tracking-wide font-light"><strong className="font-semibold">Population:</strong> {country.population.toLocaleString()}</p>
                                        <p className="dark:text-white text-veryDarkBlue tracking-wide font-light"><strong className="font-semibold">Region:</strong> {country.region}</p>
                                        <p className="dark:text-white text-veryDarkBlue tracking-wide font-light"><strong className="font-semibold">Sub Region:</strong> {country.subregion}</p>
                                        <p className="dark:text-white text-veryDarkBlue tracking-wide font-light"><strong className="font-semibold">Capital:</strong> {country.capital}</p>
                                    </div>
                                    <div className="w-2/5">
                                        <p className="dark:text-white text-veryDarkBlue tracking-wide font-light"><strong className="font-semibold">Top Level Domain</strong> {country.topLevelDomain}</p>
                                        <p className="dark:text-white text-veryDarkBlue tracking-wide font-light"><strong className="font-semibold">Currencies: </strong>
                                            {country.currencies ? (
                                                country.currencies.map((currency, index) => (
                                                    <span key={index}>
                                                        {currency.name}  {currency.symbol}</span>
                                                ))
                                            ) : (
                                                <span> No data</span>
                                            )}
                                        </p>
                                        <p className="dark:text-white text-veryDarkBlue tracking-wide font-light"><strong className="font-semibold">Languages:</strong>
                                            {country.languages ? (
                                                country.languages.map((language, index) => (
                                                    <span key={index}> {(index ? ', ' : '') + language.name} </span>
                                                ))
                                            ) : (
                                                <span className="font-bold"> No data</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex flex sm:flex-row flex-col sm:items-center mt-6">
                                    <strong className="dark:text-white text-veryDarkBlue tracking-wide font-semibold">Border Countries:</strong>
                                    <div className="flex items-center gap-2 flex-wrap sm:ml-3">
                                        {country.borders ? (
                                            borderingCountry.map((border, index) => (
                                                <Link to={`/country/${border.alpha3Code}`} key={index} className="dark:bg-darkBlue bg-white px-6 py-1 border-none rounded-md flex items-center text-veryDarkBlue dark:text-white tracking-wide font-light dark:shadow-[0_0_7px_rgba(17,21,23,0.8)] shadow-[0_0_7px_rgba(17,21,23,0.2)]">
                                                    {border.name}
                                                </Link>
                                            ))
                                        ) : (
                                            <span className="dark:text-white text-veryDarkBlue tracking-wide font-semibold"> No land borders</span>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default CountryDetails;