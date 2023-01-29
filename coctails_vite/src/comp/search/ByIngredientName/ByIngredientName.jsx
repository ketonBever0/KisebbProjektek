import React, { useState, useEffect, useContext } from 'react';
import CoctailContext from '../../context/CoctailContext';
import ByIngredientNameResults from './ByIngredientNameResults';



function ByIngredientName() {

    // const [SearchValue, setSearchValue] = useState('');
    // const [IsPending, setIsPending] = useState(false);

    const {
        IsPending,

        Search,

        FormData, setFormData,

        Coctails
    } = useContext(CoctailContext);



    return (
        <div>
            <div className="text-2xl mb-8">Összetevő szerint</div>
            <form onSubmit={(e) => {
                e.preventDefault();
                Search(FormData, "byIngredient");
            }}>
                <input id='searchValue' type="text" onChange={(e) => { setFormData(e.target.value) }} value={FormData} placeholder="Összetevő neve" className="input input-bordered input-primary w-full max-w-xs mb-20" />
                <button className="btn btn-secondary ml-5" type="submit">Keresés</button>
            </form>

            <div className='justify-center items-center grid lg:grid-cols-4 md:grid-cols-1 gap-8'>

                {IsPending && <div>Please wait...</div>}
                {!IsPending && Coctails && Coctails.map((coctails, index) => (<ByIngredientNameResults key={index} coctails={coctails} searchName={coctails.strDrink} />))}
            </div>

        </div>
    )
}

export default ByIngredientName