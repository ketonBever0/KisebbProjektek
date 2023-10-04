"use client";

import CocktailContext from "@/providers/CocktailContext";
import { useState, useEffect, useContext } from "react";

export default function AllFilters() {
  const { getCocktailsByName, getCocktailsByFirstLetter } =
    useContext(CocktailContext);

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
                className="input input-bordered focus:input-secondary w-72 max-w-xs "
                value={searchName}
                onChange={(e: any) => {
                  setSearchName(e.target.value);
                }}
              />
              <button
                className="btn btn-accent"
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
                className="btn btn-accent"
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
        <div className="flex flex-col">
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Alcoholic</span>
              <input
                type="radio"
                name="alcoholic"
                className="radio checked:radio-primary"
                checked
              />
              <input
                type="radio"
                name="alcoholic"
                className="radio checked:radio-primary"
              />
            </label>
          </div>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Remember me</span>
              <input
                type="checkbox"
                className="toggle toggle-secondary"
                checked
              />
            </label>
          </div>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <span className="label-text">Remember me</span>
              <input type="checkbox" className="toggle toggle-accent" checked />
            </label>
          </div>
        </div>
      </div>

      {/* END */}
    </div>
  );
}