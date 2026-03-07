import React, { useState } from 'react'
import "../CSS/Signup.css"

const SignUpBox = ({userSignUp, signupBtn, setinput}) => {


  return (
    <div className='signupbox'>
            <h1>SignUp</h1>
        <input type="email"  placeholder='Email' value={userSignUp.Email} 
        onChange={(e)=>setinput({...userSignUp, Email:e.target.value})}/>
        
        <input type="number"  placeholder='Phone Number' value={userSignUp.PhoneNumber} 
        onChange={(e)=>setinput({...userSignUp, PhoneNumber:e.target.value})} />
        
        <input type="text"  placeholder='Username' value={userSignUp.UserName} 
        onChange={(e)=>setinput({...userSignUp, UserName:e.target.value} )} />
        
        <input type="password"   placeholder='Password' value={userSignUp.Password} 
        onChange={(e)=>setinput({...userSignUp, Password:e.target.value} )}/>
        
        <input type="password"   placeholder='Confirm Password' value={userSignUp.confirmPass} 
        onChange={(e)=>setinput({...userSignUp, confirmPass:e.target.value})}/>
        
        <button onClick={signupBtn}>SignUp</button>
    </div>
  )
}

export default SignUpBox
