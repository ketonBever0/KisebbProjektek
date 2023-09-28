"use client"

import { createContext, useState } from "react";
import { Cocktail } from "../types/CocktailTypes";
import axios from "axios";

const CocktailContext = createContext<any | null>(null);

export const CocktailProvider = ({ children }: any) => {


    const [cocktail, setCocktail] = useState<Cocktail>();
    const [cocktailPending, setCocktailPending] = useState<boolean>(false);

    const [cocktailList, setCocktailList] = useState<any | null>([]);


    const getRandomCocktail = async (id: number | string) => {
        setCocktailPending(true);
        await axios.get("www.thecocktaildb.com/api/json/v1/1/random.php")
            .then((res: any) => {
                if (res.drinks[0]) setCocktail(res.drinks[0])
            })
            .catch(err => console.log(err))
            .finally(() => setCocktailPending(false));
    }


    return (
        <CocktailContext.Provider value={{
            cocktail, setCocktail, cocktailPending, getRandomCocktail
        }}>
            {children}
        </CocktailContext.Provider>
    )
}
export default CocktailContext;