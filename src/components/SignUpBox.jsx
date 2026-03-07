import React, { useState } from 'react'
import "../CSS/Signup.css"

const SignUpBox = ({userSignUp, signupBtn, setinput}) => {


  return (
    <div className='signupbox'>
   
        <input type="email"  placeholder='Email' value={userSignUp.Email} 
        onChange={(e)=>setSignupData({...userSignUp, Email:e.target.value}|| setinput)}/>
        
        <input type="number"  placeholder='Phone Number' value={userSignUp.PhoneNumber} 
        onChange={(e)=>setSignupData({...userSignUp, PhoneNumber:e.target.value}|| setinput)} />
        
        <input type="text"  placeholder='Username' value={userSignUp.UserName} 
        onChange={(e)=>setSignupData({...userSignUp, UserName:e.target.value} || setinput)} />
        
        <input type="password"   placeholder='Password' value={userSignUp.Password} 
        onChange={(e)=>setSignupData({...userSignUp, Password:e.target.value} || setinput)}/>
        
        <input type="password"   placeholder='Confirm Password' value={userSignUp.confirmPass} 
        onChange={(e)=>setSignupData({...userSignUp, confirmPass:e.target.value}|| setinput)}/>
        
        <button onClick={signupBtn}>SignUp</button>
    </div>
  )
}

export default SignUpBox
