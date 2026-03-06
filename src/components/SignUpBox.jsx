import React, { useState } from 'react'
import "../CSS/Signup.css"

const SignUpBox = () => {

const [signupData,setSignupData] = useState ({
    Email:"",
    PhoneNumber:"",
    UserName:"",
    Password:"",
    confirmPass: ""
})

const [userDataBox, setUserDataBox] = useState ([])

const handleSingUp = () =>{
  if (!signupData.Email ||!signupData.PhoneNumber|| !signupData.Password ){
    alert ("all fields required!")
    return false;
  }
  else if(signupData.Password.length < 8){
    alert("password not strong enough")
    return false;
  }
  else if(signupData.Password !== signupData.confirmPass){
    alert("password mismatch")
    return false;
  }

  else{
const sucessfulData =  [...userDataBox, signupData]
setUserDataBox (sucessfulData)
console.log(sucessfulData)
  }


}

  return (
    <div className='signupbox'>
   
        <input type="email"  placeholder='Email' value={signupData.Email} onChange={(e)=>setSignupData({...signupData, Email:e.target.value})}/>
        <input type="number"  placeholder='Phone Number' value={signupData.PhoneNumber} onChange={(e)=>setSignupData({...signupData, PhoneNumber:e.target.value})} />
        <input type="text"  placeholder='Username' value={signupData.UserName} onChange={(e)=>setSignupData({...signupData, UserName:e.target.value})} />
        <input type="password"   placeholder='Password' value={signupData.Password} onChange={(e)=>setSignupData({...signupData, Password:e.target.value})}/>
        <input type="password"   placeholder='Confirm Password' value={signupData.confirmPass} onChange={(e)=>setSignupData({...signupData, confirmPass:e.target.value})}/>
        <button onClick={handleSingUp}>SignUp</button>
    </div>
  )
}

export default SignUpBox
