import React from 'react'

function Banner () {
  return (
    <>
      <div className=' h-[20vh] md:h-[70vh] w-screen bg-cover bg-no-repeat bg-center flex items-end ' style={{backgroundImage: `url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
        <div className='text-xl text-white bg-black/40 w-screen text-center p-4'>Avengers Endgame</div>
      </div>
    </>
  )
} 

export default Banner
