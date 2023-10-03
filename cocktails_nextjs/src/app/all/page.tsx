"use client";

import AllFilters from "@/components/AllFilters";
import CocktailContext from "@/providers/CocktailContext";
import { useContext } from "react";

export default function AllCocktails() {
  const {} = useContext(CocktailContext);

  return (
    <div>
      {/* START: Disclaimer */}

      <div className="alert shadow-lg mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">Disclaimer</h3>
          <div className="text-xs">
            There is no way to list all of the Cocktails due to the limitations
            of the API.
            <br />
            You need to use the provided filters.
          </div>
        </div>
        {/* <button className="btn btn-sm">See</button> */}
      </div>

      {/* END: Disclaimer */}
      {/* START: Filters */}

      <AllFilters />
      
      {/* END: Filters */}
    </div>
  );
}
