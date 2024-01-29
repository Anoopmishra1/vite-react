import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [volume, setVolume] = useState(5);
  let up = () => {
    if(volume != 10){
      volume+=1
      setVolume(volume)
    }

  }
  let down = () => {
    if(volume != 0){
      volume-=1
      setVolume(volume)
    }
    
  }

  return (
    <>
      <h1>Hii I am Anoop Mishar</h1>
      <h2>volume is : {volume} </h2>
      <button onClick = {up}>up volume</button>
      <button onClick = {down}>Down volume</button>
    </>
  )
}

export default App
