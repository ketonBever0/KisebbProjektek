import React, { useState, useEffect, useRef, createContext } from 'react';

import Notify from '../../Functions';

const CoctailContext = createContext();



export const CoctailProvider = ({ children }) => {

    const [refresh, setRefresh] = useState(false);

    const update = (prev) => { setRefresh(prev => !prev) }


    const [coctails, setCoctails] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const [formData, setFormData] = useState('');
    const currentFormData = useRef({ current: "" });



    const search = async (form, byWhat) => {

        if (form == "" || form == null) {
            setCoctails(null);
            currentFormData.current = form;

            Notify.tError("No value entered!");
        } else {
            if (form != currentFormData.current) {
                currentFormData.current = form;
                setCoctails(null);
                setIsPending(true);
                switch (byWhat) {
                    case "byIngredient":
                        await fetchByIngredient(form);
                        break
                    case "byName":
                        await fetchByName(form);
                        break
                    case "byId":
                        await fetchById(form);
                        break
                }
            } else {
                Notify.tError("Same value! No request sent!");
            }
        }
    }

    let URI = `www.thecocktaildb.com/api/json/v1/1/`;

    const fetchData = async (form, byWhat) => {

        switch (byWhat) {
            case "byIngredient":
                URI = `${URI}search.php?s=${form}`;
                break;
        }

        await fetch(`${URI}`)
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
                // console.log(data.drinks);
            })
            .catch(err => {
                setIsPending(false);
                console.log(err);
            });
    }

    const fetchById = async (id) => {

        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                setCoctails(data.drinks);
                setIsPending(false);
                // console.log(data.drinks);
            })
            .catch(err => {
                setIsPending(false);
                console.log(err);
            });
    }





    return <CoctailContext.Provider value={{
        update, refresh,

        search,

        formData, setFormData,

        isPending, setIsPending,

        coctails, setCoctails
    }}>{children}</CoctailContext.Provider>
}



export default CoctailContext;