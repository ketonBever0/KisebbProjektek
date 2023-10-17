"use client";

import CocktailContext from "@/providers/CocktailContext";
import { useContext } from "react";

export default function MainFeelingLuckyBtn({title}: any) {

    const { getRandomCocktail } = useContext(CocktailContext);

    return (
        <button onClick={() => { getRandomCocktail() }} className="btn btn-primary">
            {title}
        </button>
    )
}