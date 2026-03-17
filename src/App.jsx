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
  const [currentView, setCurrentView] = useState("landing");

  const goToSignup = () => setCurrentView("signup");
  const goToLogin = () => setCurrentView("login");

  return (
    // CLASS: mainBody (from your App.css)
    <section className="mainBody">
      <Header
        users={activeUser}
        clickAction1={goToSignup}
        clickAction2={goToLogin}
        logoutAction={() => setActiveUser([])}
      />

      {activeUser.length > 0 ? (
        <ContactContainer setUsers={setActiveUser} />
      ) : (
        <Datasholder
          setCurrentView={setCurrentView}
          users={activeUser}
          currentView={currentView}
          setActiveUser={setActiveUser}
        />
      )}
    </section>
  );
}
export default App;
