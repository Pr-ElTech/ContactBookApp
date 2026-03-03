import React from 'react'
import Input from '../components/Input'
import '../CSS/InputHolder.css'
const InputHolder = ({AddBtn,contactRec, setter}) => {
  return (
    <div className='inputHolder'>
      <Input HandleAddbtn = {AddBtn} input = {contactRec} set={setter} />
      
    </div>
  )
}

export default InputHolder
