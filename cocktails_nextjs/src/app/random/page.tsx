"use client"

import { useContext } from "react";
import CocktailContext from '@/providers/CocktailContext';
import { Cocktail } from '@/types/CocktailTypes';

export default function page() {

    const {
        cocktail, cocktailPending, getRandomCocktail
    } = useContext(CocktailContext);


    return (
        <div>
            
        </div>
    );
}