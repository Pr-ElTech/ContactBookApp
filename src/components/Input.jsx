import React from 'react'
import '../CSS/Input.css'

const Input = ({HandleAddbtn, input, set, starting}) => {
  return (
    <div className='inputBoard'>
      <input type="text" 
      placeholder='Name'  
      value={input.Name || ""}
      onChange={(e)=>set({...input, Name:e.target.value})} />
      <input type="number" 
      placeholder='Phone Number'  
      value={input.Tel || ""}
      onChange={(e)=>set({...input, Tel:e.target.value})} />
      <input type="email" 
      placeholder='Email' 
      value={input.Email || ""}
      onChange={(e)=>set({...input, Email:e.target.value})} />
      <input type="text"
      placeholder='Note'   
      value={input.Note || ""}
      onChange={(e)=>set({...input, Note:e.target.value})}  />
      <button onClick={HandleAddbtn} >Add</button>
    </div>
  )
}

export default Input
