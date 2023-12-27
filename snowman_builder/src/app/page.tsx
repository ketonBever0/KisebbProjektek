"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {


  const [snowmen, setSnowmen] = useState<Array<Array<number>>>([]);

  const [min, setMin] = useState<number>(5);
  const [max, setMax] = useState<number>(20);
  const [quantity, setQuantity] = useState(50);


  const geterateSnowmen = () => {

    if (min >= max || min < 1 || max < 2) return;

    setSnowmen([]);

    setSnowmen(() => {
      const newArr = [];

      for (let i = 0; i < quantity; i++) {

        var newSubArr: Array<number> = [];
        const used: Array<number> = [];

        for (let j = 0; j < 3; j++) {

          let randomNumber;

          do {
            randomNumber = Math.round(Math.random() * (max - min + 1) + min);
          } while (used.includes(randomNumber));

          used.push(randomNumber);
          newSubArr.push(randomNumber);

          newSubArr = newSubArr.sort((a: any, b: any) => a - b);

        }

        newArr.push(newSubArr);

      }

      return newArr;

    })

  }


  const regenerate = (i: number) => {

    setSnowmen(prev => {
      const newArr = [...prev]; // Új referencia létrehozása a prevState alapján
      const newSubArr: Array<number> = [];
      const used: Array<number> = [];

      for (let j = 0; j < 3; j++) {
        let randomNumber;

        do {
          randomNumber = Math.round(Math.random() * (max - min + 1) + min);
        } while (used.includes(randomNumber));

        used.push(randomNumber);
        newSubArr.push(randomNumber);

        newSubArr.sort((a, b) => a - b);
      }

      newArr[i] = newSubArr;

      return newArr;
    });

  }





  return (
    <main className="flex min-h-screen flex-col items-center pt-10 p-24 bg-gradient-to-b from-red-800 to-30% via-green-800 to-slate-700">

      <h1 className='text-3xl mb-10 text-white'>SnowMan builder Just4Fun!</h1>

      <form>


        <div className='flex flex-wrap justify-center gap-5 mb-5'>

          <div>
            <label htmlFor='minSizeInput' className='text-white'>Min size:</label><br />
            <input type='number' id='minSizeInput' value={min} onChange={(e: any) => setMin(e.target.value)}
              className='bg-sky-700 text-center border rounded-md' min={0} />
          </div>

          <div>
            <label htmlFor='maxSizeInput' className='text-white'>Max size:</label><br />
            <input type='number' id='maxSizeInput' value={max} onChange={(e: any) => setMax(e.target.value)}
              className='bg-sky-700 text-center border rounded-md' min={0} />
          </div>

          <div>
            <label htmlFor='quantityInput' className='text-white'>How many?</label><br />
            <input type='number' id='quantityInput' value={quantity} onChange={(e: any) => setQuantity(e.target.value)}
              className='mx-auto w-40 bg-sky-700 text-center border rounded-md' />
          </div>

        </div>


        <div className='flex justify-center mt-10'>
          <button className='rounded-lg p-2 bg-blue-800 hover:bg-blue-700 active:bg-blue-900 transition-all text-white'
            onClick={(e: any) => {
              e.preventDefault();
              geterateSnowmen();
            }}>Generate SnowMen!</button>

        </div>

      </form>


      {
        snowmen.length > 0 &&
        <p className='mt-7 text-center text-white'>
          {
            snowmen.length == 1 &&
            <>(Click on that SnowMan to regenerate)</>
          }
          {
            snowmen.length > 1 && (
              <>(Click on one of these SnowMen to regenerate)</>
            )
          }
        </p>
      }


      <div className='flex flex-wrap justify-center gap-2 mt-14'>

        {
          snowmen.map((snowmen: Array<number>, index: React.Key) => (
            <div onClick={() => {
              regenerate(parseInt(`${index}`));
            }} className='flex flex-col justify-end cursor-pointer' key={index}>
              {
                snowmen.map((ball: number, ballIndex: React.Key) => (
                  <div className={`border border-gray-50 rounded-full bg-white mx-auto`}
                    style={{ height: ball, width: ball }} key={ballIndex} />
                ))
              }
            </div>
          ))
        }


      </div>

    </main>
  )
}
