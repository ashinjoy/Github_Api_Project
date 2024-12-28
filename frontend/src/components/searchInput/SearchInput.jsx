import { useState } from 'react'
import './search.css'

function SearchInput({userInp,setUserInp}) {
    const handleInput = (e)=>{
        setUserInp(e.target.value)
    }
   
  return (
    <>
    <input className='searchInp' type="text" value={userInp} onChange={handleInput}/>
    </>
  )
}

export default SearchInput
