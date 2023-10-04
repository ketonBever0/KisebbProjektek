"use client";

import { createContext, useState } from "react";
import { Cocktail } from "../types/CocktailTypes";
import axios from "axios";
import toast from "react-hot-toast";

const CocktailContext = createContext<any | null>(null);

export const CocktailProvider = ({ children }: any) => {
  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [cocktailPending, setCocktailPending] = useState<boolean>(false);
  const [cocktailRefresh, setCocktailRefresh] = useState<boolean>(false);

  const [cocktailList, setCocktailList] = useState<any | null>([]);

  const getRandomCocktail = async (id: number | string) => {
    setCocktailPending(true);
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res: any) => {
        if (res.data.drinks[0]) {
          setCocktail(res.data.drinks[0]);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCocktailPending(false);
      });
  };

  const [cocktails, setCocktails] = useState<Array<Cocktail>>([]);
  const [cocktailsPending, setCocktailsPending] = useState<boolean>(false);

  const getCocktailsByName = async (name: string) => {
      setCocktailsPending(true);
      setCocktails([]);
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res: any) => {
        if (res.data.drinks) {
          setCocktails(res.data.drinks);
        }
      })
      .finally(() => setCocktailsPending(false));
  };

  const getCocktailsByFirstLetter = (letter: string) => {
      setCocktailsPending(true);
      setCocktails([]);
    //   console.log(letter.toLowerCase());
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter.toLowerCase()}`
      )
      .then((res: any) => {
        if (res.data.drinks) {
          setCocktails(res.data.drinks);
        }
      })
      .finally(() => setCocktailsPending(false));
  };

  return (
    <CocktailContext.Provider
      value={{
        cocktail,
        setCocktail,
        cocktailPending,
        getRandomCocktail,
        getCocktailsByName,
        getCocktailsByFirstLetter,
        cocktails,
        cocktailsPending,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};
export default CocktailContext;
