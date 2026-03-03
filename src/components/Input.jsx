import React from 'react'
import '../CSS/Input.css'

const Input = ({HandleAddbtn, input, set}) => {
  return (
    <div className='inputBoard'>
      <input type="text" placeholder='Name' onChange={(e)=>set({...input, Name:e.target.value})} />
      <input type="Number" placeholder='Phone Number'onChange={(e)=>set({...input, Tel:e.target.value})} />
      <input type="Email" placeholder='Email' onChange={(e)=>set({...input, Email:e.target.value})} />
      <input type="text"placeholder='Note' onChange={(e)=>set({...input, Note:e.target.value})}  />
      <button onClick={HandleAddbtn} >Add</button>
    </div>
  )
}

export default Input
