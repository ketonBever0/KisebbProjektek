import React, { useState, useEffect, useContext, useRef } from 'react';
import CoctailContext from '../../context/CoctailContext';
import ByIngredientNameResults from './ByIngredientNameResults';

import Notify from "../../../Functions";

function ByIngredientName() {

    // const [SearchValue, setSearchValue] = useState('');
    // const [IsPending, setIsPending] = useState(false);
    const [FormData, setFormData] = useState('');
    const currentFormData = useRef();



    const {
        IsPending,
        setIsPending,
        fetchByIngredient,
        Coctails,
        setCoctails
    } = useContext(CoctailContext);


    const Search = async (form) => {

        if (form == "" || form == null) {
            setCoctails(null);
            currentFormData.current = form;
            Notify.tError("No value entered!");
        } else {
            if (form != currentFormData.current) {
                currentFormData.current = form;
                setCoctails(null);
                setIsPending(true);
                await fetchByIngredient(form);
            } else {
                Notify.tError("Same value! No request sent!");
            }
        }
    }


    return (
        <div>
            <div className="text-2xl mb-8">Összetevő szerint</div>
            <form onSubmit={(e) => {
                e.preventDefault()
                Search(FormData)
            }}>
                <input id='searchValue' type="text" onChange={(e) => { setFormData(e.target.value) }} value={FormData} placeholder="Összetevő neve" className="input input-bordered input-primary w-full max-w-xs mb-20" />
                <button className="btn btn-secondary ml-5" type="submit">Keresés</button>
            </form>

            <div className='justify-center items-center grid lg:grid-cols-4 md:grid-cols-1 gap-8'>

                {IsPending && <div>Please wait...</div>}
                {!IsPending && Coctails && Coctails.map((coctails, index) => (<ByIngredientNameResults key={index} coctails={coctails} />))}
            </div>

        </div>
    )
}

export default ByIngredientName