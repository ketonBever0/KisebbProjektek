"use client";

import CocktailContext from "@/providers/CocktailContext";
import { FilterType, SelectedFilterType } from "@/types/CocktailTypes";
import { useState, useEffect, useContext } from "react";

export default function AllFilters() {
  const {
    getCocktailsByName,
    getCocktailsByFirstLetter,
    cocktailFilters,
    cocktailFiltersPending,
    getCocktailFilters,
    selectedFilter,
    setSelectedFilter
  } = useContext(CocktailContext);

  const [searchFilterOption, setSearchFilterOption] = useState("name");

  const changeSearchFilterOption = (e: any) => {
    setSearchFilterOption(e.target.value);
  };

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [searchName, setSearchName] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  useEffect(() => {
    getCocktailFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeSelectedFilter = (e: any) => {
    setSelectedFilter((prev: SelectedFilterType) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="grid grid-flow-col grid-cols-3 place-content-around gap-10">
      {/* START */}
      <div>
        {/* <label className="label">
          <span className="label-text">Search by</span>
        </label> */}

        <div className="form-control w-52">
          <span className="label-text text-lg">
            Search By {searchFilterOption}
          </span>
          <label className="label cursor-pointer">
            <span className="label-text">Name</span>
            <input
              type="radio"
              name="filterOption"
              className="radio checked:radio-secondary"
              defaultChecked={true}
              checked={searchFilterOption === "name"}
              value={"name"}
              onChange={changeSearchFilterOption}
            />
          </label>
          <label className="label cursor-pointer">
            <span className="label-text">First Letter</span>
            <input
              type="radio"
              name="filterOption"
              className="radio checked:radio-accent"
              checked={searchFilterOption === "firstLetter"}
              value={"firstLetter"}
              onChange={changeSearchFilterOption}
            />
          </label>
        </div>

        <label className="label">
          {/* <span className="label-text">Search by Name</span> */}
          {/* <span className="label-text-alt">Top Right label</span> */}
        </label>
        {searchFilterOption == "name" ? (
          <div>
            <form>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-secondary w-72 max-w-xs "
                value={searchName}
                onChange={(e: any) => {
                  setSearchName(e.target.value);
                }}
              />
              <button
                className="btn btn-secondary ml-2 mt-4"
                onClick={(e: any) => {
                  e.preventDefault();
                  getCocktailsByName(searchName);
                }}
              >
                Search
              </button>
            </form>
          </div>
        ) : (
          <div>
            <form>
              <select
                className="select select-accent w-72 max-w-xs"
                value={selectedLetter}
                onChange={(e: any) => {
                  setSelectedLetter(e.target.value);
                }}
              >
                <option disabled selected value={""}>
                  Choose a letter...
                </option>
                {alphabet.map((letter: string, index: React.Key) => (
                  <option value={letter} key={index}>
                    {letter}
                  </option>
                ))}
              </select>
              <button
                className="btn btn-accent ml-2 mt-4"
                onClick={(e: any) => {
                  e.preventDefault();
                  getCocktailsByFirstLetter(selectedLetter);
                }}
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      <div>
        <div className="form-control w-52">
          <label className="label">
            <span className="label-text">Category:</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="category"
            value={selectedFilter.category}
            onChange={changeSelectedFilter}
          >
            <option selected value={""}>
              All
            </option>
            {cocktailFilters.categories.map(
              (category: any, index: React.Key) => (
                <option key={index}>{category.strCategory}</option>
              )
            )}
          </select>
        </div>

        <div className="form-control w-52">
          <label className="label">
            <span className="label-text">Glass:</span>
          </label>
          <select
            className="select select-bordered select-secondary w-full max-w-xs"
            name="glass"
            value={selectedFilter.glass}
            onChange={changeSelectedFilter}
          >
            <option selected value={""}>
              All
            </option>
            {cocktailFilters.glasses.map(
              (glass: any, index: React.Key) => (
                <option key={index}>{glass.strGlass}</option>
              )
            )}
          </select>
        </div>
      </div>

      <div>
      <div className="form-control w-52">
          <label className="label">
            <span className="label-text">Ingredient:</span>
          </label>
          <select
            className="select select-bordered select-primary w-full max-w-xs"
            name="ingredient"
            value={selectedFilter.ingredient}
            onChange={changeSelectedFilter}
          >
            <option selected value={""}>
              All
            </option>
            {cocktailFilters.ingredients.map(
              (ingredient: any, index: React.Key) => (
                <option key={index}>{ingredient.strIngredient1}</option>
              )
            )}
          </select>
        </div>

        <div className="form-control w-52">
          <label className="label">
            <span className="label-text">Alcoholic:</span>
          </label>
          <select
            className="select select-bordered select-error w-full max-w-xs"
            name="alcoholic"
            value={selectedFilter.alcoholic}
            onChange={changeSelectedFilter}
          >
            <option selected value={""}>
              All
            </option>
            {cocktailFilters.alcoholic.map(
              (alcoholic: any, index: React.Key) => (
                <option key={index}>{alcoholic.strAlcoholic}</option>
              )
            )}
          </select>
        </div>
      </div>

      {/* END */}
    </div>
  );
}
