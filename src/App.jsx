import { useState , useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(0);
  const [numberallowed, setNumberallowed]=useState(false);
  const [characterallowed, setCharacterallowed]=useState(false);
  const [password, setPassword]=useState();

  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(
    () => {
      let pass=""
      let str="ABCDEFGHIJKLMONPQRSTWVWQYZabcdefghijklmnopqrstwxyz"

      if(numberallowed) str+="0123456789"
      if(characterallowed) str+="!@#$%^&*()~";

      for(let i=1; i<=length; i++)
        {
          let char=Math.floor(Math.random()*str.length+1);
          pass += str.charAt(char);
        }

        setPassword(pass)
    },
    [length, numberallowed, characterallowed, setPassword],
  )

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.setSelectionRange(0,100);
  }, [password])
  
  useEffect(()=>{
    passwordGenerator()
  }, [length, numberallowed, characterallowed, passwordGenerator])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md-rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>

          <div>
            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked={numberallowed}
                id='numberInput'
                onChange={()=>{
                  setNumberallowed((prev)=> !prev)
                }}
              />
              <label htmlFor='numberInput'>Numbers</label>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked={characterallowed}
                id='characterInput'
                onChange={()=>{
                  setCharacterallowed((prev)=> !prev)
                }}
              />
              <label htmlFor='characterInput'>Characters</label>
            </div>
          </div>
          

        </div>
      </div>
     </div>
    </>
  )
}

export default App
