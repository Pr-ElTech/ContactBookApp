// import React from 'react'
// import '../CSS/Header.css'
// const Header = ({users}) => {
//   return (
// <header>
//     <div className='logo'><h1>PR-EL <span>TECH</span>/C</h1></div>

//     <div className='userpart'>{users? ({users.?map((item)=>(<h2 key={item.ID }>{item?.userName?.charAt(0).toUpperCase()}</h2>))}
//       && <button>Logout</button> ): (<button>Login / Signin</button>

//       && <button>Signup / Register</button>)

//       }
//     </div>

// </header>
//   )
// }

// export default Header

import React from "react";
import "../CSS/Header.css";

const Header = ({ users }) => {
  return (
    <header>
      <div className="logo">
        <h1>
          PR-EL <span>TECH</span>/C
        </h1>
      </div>

      <div className="userpart">
        {/* Check if users exists and has items */}
        {users && users.length > 0 ? (
          <>
            {users.map((item) => (
              <h2 key={item.ID}>{item?.userName?.charAt(0).toUpperCase()}</h2>
            ))}
            <button>Logout</button>
          </>
        ) : (
          <>
            <button>Login / Signin</button>
            <button>Signup / Register</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
