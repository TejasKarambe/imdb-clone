import React from 'react'

function Watchlist({poster_path,original_title}) {
  return (
    <>

      <div className='flex justify-center gap-5 flex-wrap m-4'>
        <div className=' py-2 px-8 rounded-lg hover:bg-blue-500 bg-blue-500 text-white cursor-pointer hover:shadow-lg hover:shadow-blue-500/50'>All Movies</div>
        <div className=' py-2 px-8 rounded-lg hover:bg-blue-500 bg-gray-400 text-white cursor-pointer hover:shadow-lg hover:shadow-blue-500/50'>Action</div>
        <div className=' py-2 px-8 rounded-lg hover:bg-blue-500 bg-gray-400 text-white cursor-pointer hover:shadow-lg hover:shadow-blue-500/50'>Action</div>

      </div>

      <div className='flex justify-center my-4 p-2'>
        <input className='border border-blue-500 bg-gray-200 p-2 w-[300px] text-lg' type="text" name="" placeholder='Search for movies' id="" />
      </div>

      <div className=' rounded-lg m-4 overflow-hidden border-2 '>
        <table className='w-[100%]'>
          <thead className=' border-b-4 border-black'>
            <tr className=' bg-blue-200'>
              <th className='w-[45vw]'>Name</th>
              <th className='w-[15vw]'>Rating</th>
              <th className='w-[15vw]'>Popularity</th>
              <th className='w-[15vw]'>Genre</th>
              <th className='w-[]'></th>
            </tr>
          </thead>
          <tbody> 
              <tr className='text-center border-b-2'>
                <td className='flex items-center justify-center md:justify-start gap-20 flex-wrap'>
                  <img className='h-[10rem] m-4' src={`https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg`} alt="" />
                  <h1>Name</h1>
                </td>
                <td className=''>8.5</td>
                <td className=''>9</td>
                <td className=''>sci-fi</td>
                <td className='text-red-600'><span className='cursor-pointer'>delete</span></td>
              </tr>
              <tr className='text-center border-b-2'>
                <td className='flex items-center justify-center md:justify-start gap-20 flex-wrap'>
                  <img className='h-[10rem] m-4' src={`https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg`} alt="" />
                  <h1>Name</h1>
                </td>
                <td className=''>8.5</td>
                <td className=''>9</td>
                <td className=''>sci-fi</td>
                <td className='text-red-600'><span className='cursor-pointer'>delete</span></td>
              </tr>
              <tr className='text-center border-b-2'>
                <td className='flex items-center justify-center md:justify-start gap-20 flex-wrap'>
                  <img className='h-[10rem] m-4' src={`https://images-cdn.ubuy.co.in/63ef0a397f1d781bea0a2464-star-wars-rogue-one-movie-poster.jpg`} alt="" />
                  <h1>Name</h1>
                </td>
                <td className=''>8.5</td>
                <td className=''>9</td>
                <td className=''>sci-fi</td>
                <td className='text-red-600'><span className='cursor-pointer'>delete</span></td>
              </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist
