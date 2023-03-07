import React from 'react'

function Result({ coctail }) {
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={coctail.strDrinkThumb} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {coctail.strDrink}
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

        </div>
    )
}

export default Result