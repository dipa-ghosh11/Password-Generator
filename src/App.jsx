import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(0);
  const [numberallowed, setNumberallowed]=useState(false);
  const [characterallowed, setCharacterallowed]=useState(false);
  const [password, setPassword]=useState(false);

  const passwordGenerator=useCallback(
    () => {
      const pass=""
      const str="ABCDEFGHIJKLMONPQRSTWVWQYZabcdefghijklmnopqrstwxyz"

      if(numberallowed) str+="0123456789"
      if(characterallowed) str+="!@#$%^&*()~";

      for(let i=1; i<=array.length; i++)
        {
          let char=Math.floor(Math.random()*str.length+1);
          pass=str.charAt(char);
        }

    },
    [length, numberallowed, characterallowed, setPassword],
  )
  

  return (
    <>
      <p className='text-4xl text-center text-white'>Password Generator</p>
    </>
  )
}

export default App
