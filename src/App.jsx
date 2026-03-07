import { useState } from 'react'
import { useEffect } from 'react'
import ContactContainer from './dev/ContactContainer'
import InputHolder from './dev/InputHolder'
import SignUpBox from './components/SignUpBox'
import LoginCom from './components/LoginCom'
import Datasholder from './dev/Datasholder'
import './App.css'

function App() {

  return (
    <section className='mainBody'> 
    {/* <ContactContainer/> */}
    <Datasholder/>
    </section>
  )
}

export default App
 