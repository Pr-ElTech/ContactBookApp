import { useState } from 'react'
import { useEffect } from 'react'
import ContactContainer from './dev/ContactContainer'
import InputHolder from './dev/InputHolder'
import SignUpBox from './components/SignUpBox'
import LoginCom from './components/LoginCom'
import './App.css'

function App() {

  return (
    <section className='mainBody'> 
    {/* <ContactContainer/> */}
    <SignUpBox/>
    <LoginCom/>
    
    </section>
  )
}

export default App
 