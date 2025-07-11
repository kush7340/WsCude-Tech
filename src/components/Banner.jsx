import React from 'react'


function Banner() {
  return (
    <div className='bg-[#2699fd] w-full py-[50px] md:py-[100px]'>
      <div className='max-w-[1200px] my-[40px] mx-auto text-center font-bold'>
        <div className='md:text-3xl text-xl mt-4 md:p-[24]'> Lerna With US</div>
        <div className='text-white  md:text-[80px] text-3xl mt-4 md:p-[24]'>Grow With Us.</div>
        <div className='text-white text-2xl md:text-[50px] mt-4 md:p-[24]'>Learn web Development, Digital Marketing
         

        </div>
        <button className='bg-black text-white p-3 rounded mt-4'>Get Started</button>
      </div>
    </div>
  )
}

export default Banner