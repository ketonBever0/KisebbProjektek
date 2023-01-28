import React, { useState, useEffect, createContext } from 'react';

const CoctailContext = createContext();



export const CoctailProvider = ({ children }) => {

    const [Refresh, setRefresh] = useState(false);

    const update = (prev) => { setRefresh(prev => !prev) }


    const [Coctails, setCoctails] = useState(null);




    const fetchByIngredient = async (ingredient) => {


        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(res => res.json())
            .then(data => setCoctails(data.drinks))
            .catch(err => console.log(err));

        // setCoctails({
        //     fail: true,
        //     error: err
        // })


    }




    return <CoctailContext.Provider value={{
        update,
        fetchByIngredient,
        Coctails
    }}>{children}</CoctailContext.Provider>




}



export default CoctailContext;