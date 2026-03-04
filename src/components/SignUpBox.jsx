import React, { useState } from 'react'

const SignUpBox = () => {

const [signupData,setSignupData] = useState ({
    Email:"",
    PhoneNumber:"",
    UserName:"",
    Password:""
})

const handleSingUp = () =>{

}

  return (
    <div>

        <input type="email"  placeholder='Email' value={signupData.Email} />
        <input type="number"  placeholder='Phone Number' value={signupData.PhoneNumber} />
        <input type="text"  placeholder='Username' value={signupData.UserName} />
        <input type="text"   placeholder='Password' value={signupData.Password}/>
        <input type="text"   placeholder='Confirm Password'/>
        <button>SignUp</button>
    </div>
  )
}

export default SignUpBox
