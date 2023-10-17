"use client";

import { createContext, useState } from "react";
import { Cocktail, FilterType, SelectedFilterType } from "../types/CocktailTypes";
import axios, { AxiosResponse } from "axios";
import toast from "react-hot-toast";

const CocktailContext = createContext<any | null>(null);

export const CocktailProvider = ({ children }: any) => {
  const [cocktailRefresh, setCocktailRefresh] = useState<boolean>(false);
  const [heroCocktail, setHeroCocktail] = useState<Cocktail | null>(null);
  const [heroCocktailPending, setHeroCocktailPending] = useState<boolean>(false);

  const getHeroCocktail = async (id: number | string) => {
    setHeroCocktailPending(true);
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res: AxiosResponse) => {
        if (res.data.drinks[0]) {
          setHeroCocktail(res.data.drinks[0]);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setHeroCocktailPending(false);
      });
  };

  const [cocktail, setCocktail] = useState<Cocktail | null>(null);
  const [cocktailPending, setCocktailPending] = useState<boolean>(false);

  const getRandomCocktail = async (id: number | string) => {
    setCocktailPending(true);
    await axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res: AxiosResponse) => {
        if (res.data.drinks[0]) {
          setCocktail(res.data.drinks[0]);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setCocktailPending(false);
      });
  };

  // const [cocktailList, setCocktailList] = useState<any | null>([]);

  const [cocktails, setCocktails] = useState<Array<Cocktail>>([]);
  const [cocktailsPending, setCocktailsPending] = useState<boolean>(false);

  const getCocktailsByName = async (name: string) => {
      setCocktailsPending(true);
      setCocktails([]);
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((res: AxiosResponse) => {
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
      .then((res: AxiosResponse) => {
        if (res.data.drinks) {
          setCocktails(res.data.drinks);
        }
      })
      .finally(() => setCocktailsPending(false));
  };


  const [cocktailFilters, setCocktailFilters] = useState<FilterType>({
    categories: [],
    glasses: [],
    ingredients: [],
    alcoholic: []
  });

  const [cocktailFiltersPending, setCocktailFiltersPending] = useState<boolean>(false);

  const getCocktailFilters = async () => {
    setCocktailFiltersPending(true);

    // CATEGORIES
    await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
    .then((res: AxiosResponse) => {
      if(res.data.drinks) {
        setCocktailFilters((prev: FilterType) => ({
          ...prev,
          categories: res.data.drinks
        }))
      }
    })

    // GLASSES
    await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
    .then((res: AxiosResponse) => {
      if(res.data.drinks) {
        setCocktailFilters((prev: FilterType) => ({
          ...prev,
          glasses: res.data.drinks
        }))
      }
    })
    
    // INGREDIENTS
    await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
    .then((res: AxiosResponse) => {
      if(res.data.drinks) {
        setCocktailFilters((prev: FilterType) => ({
          ...prev,
          ingredients: res.data.drinks
        }))
      }
    })

    // ALCOHOLIC
    await axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
    .then((res: AxiosResponse) => {
      if(res.data.drinks) {
        setCocktailFilters((prev: FilterType) => ({
          ...prev,
          alcoholic: res.data.drinks
        }))
      }
    })
    setCocktailFiltersPending(false);
  }


  const [selectedFilter, setSelectedFilter] = useState<SelectedFilterType>({
    category: "",
    glass: "",
    ingredient: "",
    alcoholic: "",
  });


  return (
    <CocktailContext.Provider
      value={{
        heroCocktail,
        heroCocktailPending,
        getHeroCocktail,
        cocktail,
        setCocktail,
        cocktailPending,
        getRandomCocktail,
        getCocktailsByName,
        getCocktailsByFirstLetter,
        cocktails,
        cocktailsPending,
        cocktailFilters,
        cocktailFiltersPending,
        getCocktailFilters,
        selectedFilter,
        setSelectedFilter
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};
export default CocktailContext;
