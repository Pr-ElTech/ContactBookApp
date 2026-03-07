import React from 'react'
import { useState } from 'react'
import "../CSS/LogiCom.css"

const LoginCom = () => {

  return (
    <div className='loginbox'>
        <input type="email"  placeholder='Email / username' value={loginData.Email || loginData.UserName }  onChange={(e)=>set({...input, UserName:e.target.value? Email:e.target.value})}/>
        <input type="text"   placeholder='Password' value={loginData.Password} onChange={(e)=>set({...input, Password:e.target.value})}/>
        <button onClick={handleloginData}>Login</button>
    </div>
  )
}

export default LoginCom
