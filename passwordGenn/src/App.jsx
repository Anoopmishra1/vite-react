
import { useState, useCallback, forwardRef, useEffect, useRef} from 'react'


function App() {
  const [length, detLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "`!@#$%^&*()_+{}'?><"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClibboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password)
  },[password])
    
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-white text-center my-4'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref ={passwordRef}

        />
        <button 
        onClick={copyPasswordToClibboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <dir className="flex text-sm gap-x-2">
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {detLength(e.target.value)}}
          />
          
          <label>Length:{length}</label>

        </div>

        <input 
        type="checkbox" 
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=> {setNumberAllowed((prev)  => !prev)}}
        />

        <label htmlFor="numberInput">Number</label>
      

        <input 
        type="checkbox" 
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={()=> {setcharAllowed((prev)  => !prev)}}
        />

        <label htmlFor="characterInput">character</label>
      </dir>


    </div>
    </>
  )
}

export default App
