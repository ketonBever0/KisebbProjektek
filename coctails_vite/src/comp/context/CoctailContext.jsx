import React, { useState, useEffect, createContext } from 'react';

const CoctailContext = createContext();



export const CoctailProvider = ({ children }) => {

    const [Refresh, setRefresh] = useState(false);

    const update = (prev) => { setRefresh(prev => !prev) }


    const [Coctails, setCoctails] = useState(null);
    const [IsPending, setIsPending] = useState(false);


    const fetchByName = async (name) => {
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
            .then(res => res.json())
            .then(data => {
                setCoctails(data.drinks);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                console.log(err);
            });
    }


    const fetchByIngredient = async (ingredient) => {


        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(res => res.json())
            .then(data => {
                setCoctails(data.drinks);
                setIsPending(false);
            })
            .catch(err => {
                setIsPending(false);
                console.log(err);
            });
    }





    return <CoctailContext.Provider value={{
        update,
        IsPending,
        setIsPending,

        fetchByIngredient,
        fetchByName,

        Coctails,
        setCoctails
    }}>{children}</CoctailContext.Provider>




}



export default CoctailContext;