import React from "react";
import "../CSS/Header.css";

const Header = ({ users, clickAction1, clickAction2, logoutAction }) => {
  return (
    <header>
      <div className="logo">
        <h1>
          PR-EL <span>TECH</span>/C
        </h1>
      </div>

      <div className="userpart">
        {users && users.length > 0 ? (
          <>
            {users.map((item) => (
              <h2 key={item.ID}>{item?.userName?.charAt(0).toUpperCase()}</h2>
            ))}
            <button onClick={logoutAction}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={clickAction2}>Login / Signin</button>
            <button onClick={clickAction1}>Signup / Register</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
