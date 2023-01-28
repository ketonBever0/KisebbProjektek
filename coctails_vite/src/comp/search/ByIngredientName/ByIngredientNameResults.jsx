import React, { useState, useEffect } from 'react';

function ByIngredientNameResults({ coctails }) {

    const [CoctailData, setCoctailData] = useState([]);




    return (


        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={coctails.strDrinkThumb} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {coctails.strDrink}
                    {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p></p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"></div>
                    {/* <div className="badge badge-outline">{Category()}</div> */}
                </div>
            </div>
        </div>
    )
}




export default ByIngredientNameResults