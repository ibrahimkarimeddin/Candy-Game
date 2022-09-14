import React, { useState } from 'react'
import Login from './components/Login'
import Game from "./Game"
function App() {
  const [islogin , setislogin ] = useState(false)
  const [width , setwidth ] = useState(0)
  console.log(width )
  if(islogin){
    return (
      <div className='wraper'>
        <Game width={width} /> 
      </div>
    )
  }
  return (
    <div className='wraper'>
    <Login setislogin={setislogin} setwidth={setwidth}/> 
    </div>
  )
} 

export default App