import React from 'react'

function MovieCard({poster_path, original_title, handleAddtoWatchList}) {
  return (
    <div className='flex flex-col justify-between h-[250px] w-[170px] font-bold bg-cover rounded-2xl hover:scale-110 duration-300 hover:font-extrabold cursor-pointer' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
      <div className='text-red-300 text-xl h-10 flex justify-end mr-3 items-center '><i className="fa-regular fa-heart fa-sm px-1 py-3 rounded-sm bg-black/70"></i></div>
      <div className=' text-white bg-gray-900/40 p-2 w-[100%] text-center rounded-b-xl'>{original_title}</div>
    </div>
  )
}

export default MovieCard    
