// "use client"
import { CocktailProvider } from "@/providers/CocktailContext"

export const Providers = ({ children }: any) => {
    return (
        <CocktailProvider>

            {children}

        </CocktailProvider>
    )
}