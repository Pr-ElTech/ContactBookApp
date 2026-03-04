import React, { useState } from 'react'

const SignUpBox = () => {

const [signupData,setSignupData] = useState ({
    Email:"",
    PhoneNumber:"",
    UserName:"",
    Password:""
})

const handleSingUp = () =>{
  if (!signupData.Email ||!signupData.PhoneNumber|| !signupData.Password ){
    alert ("all fields required!")
  }


}

  return (
    <div>
   
        <input type="email"  placeholder='Email' value={signupData.Email} onChange={(e)=>setSignupData({...signupData, Email:e.target.value})}/>
        <input type="number"  placeholder='Phone Number' value={signupData.PhoneNumber} onChange={(e)=>setSignupData({...signupData, PhoneNumber:e.target.value})} />
        <input type="text"  placeholder='Username' value={signupData.UserName} onChange={(e)=>setSignupData({...signupData, UserName:e.target.value})} />
        <input type="text"   placeholder='Password' value={signupData.Password} onChange={(e)=>setSignupData({...signupData, Password:e.target.value})}/>
        <input type="text"   placeholder='Confirm Password' value={signupData.Email} onChange={(e)=>setSignupData({...signupData, Email:e.target.value})}/>
        <button onClick={handleSingUp}>SignUp</button>
    </div>
  )
}

export default SignUpBox
