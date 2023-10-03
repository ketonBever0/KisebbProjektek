"use client";

import { useContext, useEffect } from "react";
import CocktailContext from "@/providers/CocktailContext";
import { Cocktail } from "@/types/CocktailTypes";

export default function FeelingLucky() {
  const { cocktail, cocktailPending, getRandomCocktail } =
    useContext(CocktailContext);

  useEffect(() => {
    !cocktail && !cocktailPending && getRandomCocktail();
  });



  return <div>

  </div>;
}
