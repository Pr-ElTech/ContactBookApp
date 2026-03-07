import React from 'react'
import { useState } from 'react'
import "../CSS/LogiCom.css"

const LoginCom = ({userLoginData}) => {

  return (
    <div className='loginbox'>
        <input type="email"  placeholder='Email / username' value={userLoginData.Email || userLoginData.UserName }  onChange={(e)=>set({...input, UserName:e.target.value? Email:e.target.value})}/>
        <input type="text"   placeholder='Password' value={userLoginData.Password} onChange={(e)=>set({...input, Password:e.target.value})}/>
        <button onClick={handleloginData}>Login</button>
    </div>
  )
}

export default LoginCom
