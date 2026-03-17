import { useState } from "react";
import { useEffect } from "react";
import ContactContainer from "./dev/ContactContainer";
import InputHolder from "./dev/InputHolder";
import Datasholder from "./dev/Datasholder";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [activeUser, setActiveUser] = useState(
    JSON.parse(localStorage.getItem("activeUsers")) || [],
  );

  const [signUpClick, setSignUpClick] = useState(false);
  const [loginClick, setLoginUpClick] = useState(false);

  const setpage = () => {
    if (signUpClick === true) {
      setSignUpClick(signUpClick);
      return;
    }
    setSignUpClick(false);
  };

  return (
    <section className="mainBody">
      <Header users={activeUser} clickAction={setpage} />
      {!activeUser ? (
        <ContactContainer setUsers={setActiveUser} />
      ) : (
        <Datasholder users={activeUser} clickAction={setpage} />
      )}
    </section>
  );
}

export default App;
