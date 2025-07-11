import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


function Header() {
    const [togale, setTogale] = useState(false)
    return (
        <div className='bg-[#2699fd] p-4'>
            <div className='max-w-[1200px] py-[12px] mx-auto items-center flex justify-between'>
                <div className='text-3xl font-bold'>
                    WsCude Tech
                </div>
                {
                    togale ?
                        <AiOutlineClose onClick={() => setTogale(!togale)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setTogale(!togale)} className='text-white text-2xl md:hidden block' />
                }


                <ul className='md:flex hidden text-white gap-5'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <ul className={`md:flex md:hidden w-full h-screen text-white gap-5 fixed ${togale?"left-[0%]":"left-[-100%]"} top-[90px] bg-black duration-300`}>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Resources</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header