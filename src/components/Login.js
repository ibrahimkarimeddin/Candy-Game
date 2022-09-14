import React, { useRef } from 'react'

function Login({setislogin ,setwidth }) {
    
    const se = ()=>{
        const input = document.getElementById("1")
        setislogin(true)
    }
  return (
    <div>
        <img src='./855983.jpg' alt='' className='image' />
        <div className='center bg-white rounded-md shadow-lg'>
            <h1 className='text-purple-600 text-center font-bold text-lg mt-5 border-b-2 w-[90%] mx-auto '>Welcome for Game </h1>
            <button onClick={se} className="w-[150px] mx-auto mb-10 bg-purple-600 text-white p-2">Start Game</button>
        </div>
    </div>
  )
}

export default Login