import React, { useState, useEffect, useContext } from 'react';
import CoctailContext from '../../context/CoctailContext';
import ResultContainer from '../ResultContainer';
import ByIngredientNameResults from './ByIngredientNameResults';



function ByIngredientName() {

    // const [SearchValue, setSearchValue] = useState('');
    // const [IsPending, setIsPending] = useState(false);

    const {
        isPending,

        search,

        formData, setFormData,

        coctails
    } = useContext(CoctailContext);



    return (
        <div>
            <div className="text-2xl mb-8">Összetevő szerint</div>
            <form onSubmit={(e) => {
                e.preventDefault();
                search(formData, "byIngredient");
            }}>
                <input id='searchValue' type="text" onChange={(e) => { setFormData(e.target.value) }} value={formData} placeholder="Összetevő neve" className="input input-bordered input-primary w-full max-w-xs mb-20" />
                <button className="btn btn-secondary ml-5" type="submit">Keresés</button>
            </form>

            <ResultContainer />

            {/* <div className='justify-center items-center grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

                {isPending && <div>Please wait...</div>}
                {!isPending && coctails && coctails.map((coctails, index) => (<ByIngredientNameResults key={index} coctails={coctails} searchId={coctails.idDrink} />))}
            </div> */}

        </div>
    )
}

export default ByIngredientName