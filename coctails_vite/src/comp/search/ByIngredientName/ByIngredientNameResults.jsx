import React, { useState, useEffect, useContext } from 'react';
import CoctailContext from '../../context/CoctailContext';

function ByIngredientNameResults({ coctails }, searchId) {


    const { Search, Coctails } = useContext(CoctailContext);
    const [CoctailData, setCoctailData] = useState(null);


    const showBadges = () => {

        Search(coctails.idDrink, "byId");
        console.log(Coctails);

        return (
            <div className="badge badge-outline">{Coctails.strCategory}</div>
        )

    }


    const Details = () => {

    }


    return (


        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={coctails.strDrinkThumb} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {coctails.strDrink}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">teszt</div>
                    {/* <div className="badge badge-outline">{Category()}</div> */}
                </div>
                <div className="card-actions justify-right mt-4">
                    <button className='btn btn-secondary'>What is this?</button>
                </div>
            </div>
        </div>
    )
}




export default ByIngredientNameResults