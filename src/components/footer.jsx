import React from 'react'

export default function footer() {
    return (
        <div className='flex flex-col'>
            <div className='flex text-white text-6xl mb-16 justify-center'>
                <h1>Contact</h1>

            </div>
            <div className='flex flex-col text-indigo-200 pl-12 text-xl justify-center align-start'>
                <span><p>Address: Faridabad, Haryana, 121002</p></span>
                <span><p>leeco22134@gmail.com</p></span>
                <span> <p>8375065306,8448479427</p></span>
            </div>
            <div className='flex flex-row text-white justify-evenly ml-82 mr-82 mt-16 mb-8'>
                <div className='flex justify-centerS rounded-lg border-2 uppercase border-green-400  bg-black text-green-500 px-10 hover:bg-green-500 hover:text-black'>
                    <a href="https://www.linkedin.com/in/xander-4a4051196/"> LinkedIn</a>
                </div>
                <div className='flex justify-center rounded-lg border-2 uppercase border-green-400  bg-black text-green-500 px-10 hover:bg-green-500 hover:text-black'>
                    <a href="https://github.com/XanderC69"> Github</a>
                </div>
                <div className='flex justify-center rounded-lg border-2 uppercase border-green-400  bg-black text-green-500 px-10 hover:bg-green-500 hover:text-black'>
                    <a href="https://www.facebook.com/profile.php?id=100012570885020">Facebook</a>
                </div>
                <div className='flex justify-center rounded-lg border-2 uppercase border-green-400  bg-black text-green-500 px-10 hover:bg-green-500 hover:text-black'>
                    <a href="https://www.instagram.com/__xander.p/"> Instagram</a>
                </div>
            </div>

        </div>
    )
}
