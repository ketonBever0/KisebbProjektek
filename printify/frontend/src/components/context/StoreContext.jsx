import { createContext } from "react";
import React, { useState, useEffect } from 'react';


const StoreContext = createContext();


export const StoreProvider = ({ children }) => {


    const [refresh, setRefresh] = useState(false);
    const [storeData, setStoreData] = useState(null);


    const update = () => setRefresh(prev => !prev);






    return <StoreContext.Provider value={{
        refresh, update,
        storeData, setStoreData
    }}>{children}</StoreContext.Provider>
}

export default StoreContext;