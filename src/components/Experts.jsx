import React from 'react'
import image from "../assets/kus.jpg"


function Experts() {
    return (
        <div className='max-w-[1200px] mx-auto md:grid my-10  p-3 grid-cols-2'>
            <div className='col-span-1 md:w-[80%] h-[400px]'>
                <img src={image} alt="" className='w-full h-[100%]' />
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold my-2'>Lern Form Experts</h1>
                <p className='my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur cupiditate assumenda architecto at, autem ipsa! Ad, ab iure dolorum libero a laborum quod voluptate minus dolore, beatae mollitia perspiciatis rerum!
                </p>
                <button className='bg-black w-[30%] text-white p-3 rounded'>Get Started</button>
            </div>
        </div>
    )
}

export default Experts