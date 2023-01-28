import React, { useState, useEffect, useContext } from 'react';
import CoctailContext from '../../context/CoctailContext';
import ByIngredientNameResults from './ByIngredientNameResults';


function ByIngredientName() {

    // const [SearchValue, setSearchValue] = useState('');
    const [FormData, setFormData] = useState('');


    // const update = () => {
    //     setRefresh((prev) => !prev);
    // }

    const { fetchByIngredient, Coctails } = useContext(CoctailContext);


    const Search = (data) => {

        // e.preventDefault();
        // console.log(Coctails);
        fetchByIngredient(data);


    }


    // useEffect(() => {

    //     if (SearchValue !== '') {
    //         fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${SearchValue}`)
    //             .then(res => res.json())
    //             .then(data => setCoctails(data.drinks))
    //             .catch(err => console.log(err));
    //     }
    // }, [SearchValue])

    const Listing = () => {
        try {
            return (
                <div className='justify-center items-center grid lg:grid-cols-4 md:grid-cols-1 gap-8'>
                    {Coctails.map((coctails, index) => (<ByIngredientNameResults key={index} coctails={coctails} />))}
                </div>
            )
        }
        catch {
            return (<div>Nincs ilyen hozzávaló.</div>)
        }
    }

    // console.log(Coctails);

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


            {
                Listing()
                //MŰKÖDIKK GECCCIIII
            }

        </div>
    )
}

export default ByIngredientName