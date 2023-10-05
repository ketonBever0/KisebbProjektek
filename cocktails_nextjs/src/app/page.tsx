"use client";

import CocktailContext from "@/providers/CocktailContext";
import { Cocktail } from "@/types/CocktailTypes";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext, useEffect, useRef } from "react";

export default function Home() {
  const { cocktail, cocktailPending, cocktailRefresh, getRandomCocktail } =
    useContext(CocktailContext);

  useEffect(() => {
    if (cocktail == null) {
      getRandomCocktail();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          {cocktail && (
            <Image
              src={cocktail && !cocktailPending && cocktail.strDrinkThumb}
              priority={false}
              width={200}
              height={500}
              className="max-w-sm h-auto w-auto rounded-lg shadow-2xl"
              alt={""}
            />
          )}
          <div>
            <h1 className="text-5xl font-bold">Welcome to my Cocktail Page!</h1>
            <p className="py-6">Search and filter cocktail as you want...</p>
            <div className="flex gap-4">
              <Link href="/search" className="btn btn-secondary">
                Got It!
              </Link>
              <Link href="/random" className="btn btn-primary">
                Feeling Lucky Today?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
