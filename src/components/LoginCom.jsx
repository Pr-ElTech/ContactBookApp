import React from "react";
import { useState } from "react";
import "../CSS/LogiCom.css";

const LoginCom = ({ userLoginData, loginBtn, setinput2 }) => {
  return (
    <div className="loginbox">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email / username"
        value={userLoginData.Email || userLoginData.UserName}
        onChange={(e) =>
          setinput2({
            ...userLoginData,
            UserName: e.target.value,
            Email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={userLoginData.Password}
        onChange={(e) =>
          setinput2({ ...userLoginData, Password: e.target.value })
        }
      />

      <button onClick={loginBtn}>Login</button>
    </div>
  );
};

export default LoginCom;
