import React from "react";
import "../CSS/Landingpage.css";
const LadingUserPage = () => {
  return (
    <article className="landingPage">
      <div className="security">
        <h1>PR-EL TECH/C</h1>
        <h3>Security You Can Trust</h3>
        <p>
          At <b> PR-EL TECH</b>, we believe that your digital identity is your
          most valuable asset. That's why we've built our platform with a
          Security-First mindset. <br />
          Whether you are managing personal projects or collaborating with a
          team, <br />
          your information is protected by industry-standard protocols.
        </p>
      </div>
      <div className="moreinfo">
        <div className="info">
          <h1>PR-EL TECH/C</h1>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>
              <b>End-to-End Encryption:</b> Your passwords and sensitive data
              are hashed and encrypted,
              <br /> ensuring that your private information stays private
            </li>
            <li>
              <b>Secure Authentication:</b> Our login system is designed to
              verify your identity strictly,
              <br /> preventing unauthorized access to your dashboard.{" "}
            </li>
            <li>
              <b>Session Integrity:</b> With active-user tracking, we ensure
              that only you are in control
              <br /> of your account at any given time.
            </li>
            <li>
              <b>Reliable Data Persistence:</b> Using advanced local storage
              management, your progress is
              <br />
              saved securely and stays right where you left it.
            </li>
            <li>
              your information is protected by industry-standard protocols.
            </li>
          </ul>
        </div>
        <div className="images">
          <img
            src="https://i.postimg.cc/85vz2HpV/nathan-dumlao-4-m-J1Tb-MK8A-unsplash.jpg"
            alt="family"
          />
          <img src="https://i.postimg.cc/HW2gVKhC/lock.webp" alt="security" />
        </div>
      </div>
    </article>
  );
};

export default LadingUserPage;
