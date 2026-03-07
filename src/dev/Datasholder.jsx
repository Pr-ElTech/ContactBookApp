import React from 'react'
import { useState } from 'react'
import LoginCom from '../components/LoginCom'
import SignUpBox from '../components/SignUpBox'
import Header from '../components/Header'
import '../CSS/Datasholder.css'

const Datasholder = () => {
    const [signupData,setSignupData] = useState ({
    Email:"",
    PhoneNumber:"",
    UserName:"",
    Password:"",
    confirmPass: ""
})

const [userDataBox, setUserDataBox] = useState (JSON.parse(localStorage.getItem("userUpdate"))||[])

const handleSingUp = () =>{
  if (!signupData.Email ||
    !signupData.PhoneNumber|| 
    !signupData.UserName ||
    !signupData.Password||
    !signupData.confirmPass ){
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
const successfulData =  [...userDataBox, signupData]
setUserDataBox (localStorage.setItem("userUpdate", JSON.stringify(successfulData)))
alert("signup successful")
setSignupData(
    {
    Email:"",
    PhoneNumber:"",
    UserName:"",
    Password:"",
    confirmPass: ""
    }
)
return true;
  }


}

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
const userMenu = userDataBox.find((user)=>user.Email === loginData.Email || 
user.UserName === loginData.UserName)
if (!userMenu){
    alert("user not found")
return false;
}
else if (loginData.Password !== userMenu.Password)
    alert("incorrect password!")
else{
  
}
}


  return (
    <section className='holder'>

      <Header/>
      <SignUpBox  userSignUp = {signupData} signupBtn = {handleSingUp} setinput = {setSignupData} /> 
      <LoginCom userLoginData = {loginData} />
      
      
    </section>
  )
}

export default Datasholder
