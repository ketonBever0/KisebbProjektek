"use client";

import CocktailContext from "@/providers/CocktailContext";
import { useContext, useEffect } from "react";
import Image from "next/image";

export default function MainCocktailImg() {


    const { heroCocktail, heroCocktailPending, getHeroCocktail } =
        useContext(CocktailContext);

    useEffect(() => {
        if (heroCocktail == null) {
            getHeroCocktail();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            {heroCocktail && (
                <Image
                    src={heroCocktail && !heroCocktailPending && heroCocktail.strDrinkThumb}
                    priority={false}
                    width={200}
                    height={500}
                    className="max-w-sm h-auto w-auto rounded-lg shadow-2xl"
                    alt={""}
                />
            )}
        </>
    )
}