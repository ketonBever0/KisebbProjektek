import React, { useContext } from 'react'
import CoctailContext from '../context/CoctailContext';
import Result from './Result';

function ResultContainer() {

    const {
        isPending,
        coctails
    } = useContext(CoctailContext);


    return (
        <div>
            <div className='justify-center items-center grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>

                {isPending && <div>Please wait...</div>}
                {!isPending && coctails && coctails.map((coctail, index) => (<Result key={index} coctail={coctail} searchId={coctail.idDrink} />))}

            </div>
        </div>
    )
}

export default ResultContainer