import React from 'react'
import { useState } from 'react'

const LoginCom = () => {
const [loginData,setLoginData] = useState ({
    Email:"",
    UserName:"",
    Password:""
})

const handleloginData = () =>{
if (!loginData.Email || !loginData.UserName || !loginData.Password){
  alert ("All field required!")
  return false;
}
else if (loginData.Email || loginData.UserName){
return true;
}
else{
  
}
}

  return (
    <div>
        <input type="email"  placeholder='Email / username' value={loginData.Email || loginData.UserName }  onChange={(e)=>set({...input, UserName:e.target.value? Email:e.target.value})}/>
        <input type="text"   placeholder='Password' value={loginData.Password} onChange={(e)=>set({...input, Password:e.target.value})}/>
        <button onClick={handleloginData}>Login</button>
    </div>
  )
}

export default LoginCom
