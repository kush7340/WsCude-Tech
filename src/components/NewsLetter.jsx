import React from 'react'

function NewsLetter() {
    return (
        <div className='bg-[#2699fd] p-4'>
            <div className='max-w-[1200px] mx-auto md:flex justify-between py-[50px]'>
                <div>
                    <h1 className='md:text-[40px] text-[20px] font-bold text-white'>Want to learn latest I.T skills</h1>
                    <span className='text-white'>Sing up to newsletter and stay up to date</span>
                </div>
                <div>
                    <input type="text" className='p-3 mr-2 text-slate-600 bg-white' placeholder='Email' />
                    <button className='bg-black text-white p-3 rounded mt-4'>Get Started</button>
                    <br />
                    <p className='text-white'> We care bout the protection of your data. Read our <br /> <a href="" className='text-black'>Privacy  Policy</a> </p>
                </div>
            </div>

        </div>
    )
}

export default NewsLetter