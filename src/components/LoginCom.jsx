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
        <input type="email"  placeholder='Email / username' value={loginData.Email || loginData.UserName } />
        <input type="text"   placeholder='Password' value={loginData.Password}/>
        <button>Login</button>
    </div>
  )
}

export default LoginCom
