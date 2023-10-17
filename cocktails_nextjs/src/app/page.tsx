import MainCocktailImg from "@/components/MainCocktailImg";
import MainFeelingLuckyBtn from "@/components/MainFeelingLuckyBtn";
import MainRandomCocktailCard from "@/components/MainRandomCocktailCard";
import CocktailContext from "@/providers/CocktailContext";
import { Cocktail } from "@/types/CocktailTypes";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext, useEffect, useRef } from "react";

export default function Home() {

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <MainCocktailImg />
          <div>
            <h1 className="text-5xl font-bold">Welcome to my Cocktail Page!</h1>
            <p className="py-6">Search and filter cocktail as you want...</p>
            <div className="flex gap-4">
              <Link href="/search" className="btn btn-secondary">
                Got It!
              </Link>
              <MainFeelingLuckyBtn title={"Feeling Lucky Today?"} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div id="randomCard" className="mt-5">
          <MainRandomCocktailCard />
        </div>
      </div>

    </div>
  );
}
