"use client"

import CocktailContext from "@/providers/CocktailContext"
import { useContext, useEffect } from "react"
import Image from "next/image";
import MainFeelingLuckyBtn from "./MainFeelingLuckyBtn";

export default function MainRandomCocktailCard() {

    const { cocktail, cocktailPending } = useContext(CocktailContext);

    useEffect(() => {
        const randomCard = document.getElementById("randomCard");
        randomCard?.scrollIntoView({ behavior: "smooth" });
    }, [cocktail]);

    return (
        <>
            {cocktail &&
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image
                            src={cocktail.strDrinkThumb}
                            alt={`Picture of ${cocktail.strDrink}`}
                            width={300}
                            height={300}
                            className="mt-4 rounded-md"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {cocktail.strDrink}
                            {cocktail.strAlcoholic == "Alcoholic" && <div className="badge badge-error">{cocktail.strAlcoholic}</div>}
                        </h2>
                        <p>{cocktail.strInstructions}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">{cocktail.strGlass}</div>
                            <div className="badge badge-outline">{cocktail.strCategory}</div>
                            <br />
                            <MainFeelingLuckyBtn title="Again..." />
                        </div>
                    </div>
                </div>}
        </>
    )
}