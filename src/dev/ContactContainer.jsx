import ContactCard from "../components/ContactCard";
import "../CSS/ContactContainer.css";
import { useState } from "react";
import InputHolder from "./InputHolder";

import React from "react";

const ContactContainer = () => {
  const [contactDetail, setContactDetail] = useState({
    Name: "",
    Tel: "",
    Email: "",
    Note: "",
  });

  const [contacts, setContact] = useState(
    JSON.parse(localStorage.getItem("contacts")) || [],
  );

  const handleContact = () => {
    if (!contactDetail.Name || !contactDetail.Tel || !contactDetail.Email) {
      alert("all feilds are required");
      return false;
    } else {
      setContactDetail(contactDetail);
      const newContact = {
        ...contactDetail,
        Date: new Date().toLocaleDateString(),
        ID: Date.now(),
      };
      const contactInfo = [...contacts, newContact];
      setContact(contactInfo);
      localStorage.setItem("contacts", JSON.stringify(contactInfo));
      const start = setContactDetail({
        Name: "",
        Tel: "",
        Email: "",
        Note: "",
      });
    }
  };

  const handdleDelete = (id) => {
    const deletedContact = contacts.filter((details) => details.ID !== id);
    setContact(deletedContact);
    localStorage.setItem("contacts", JSON.stringify(deletedContact));
  };

  return (
    <section className="bodyHolder">
      <div className="inputbar">
        <InputHolder
          AddBtn={handleContact}
          setter={setContactDetail}
          contactRec={contactDetail}
        />
      </div>
      <div className="ContactContainer">
        {contacts.map((details) => (
          <ContactCard
            key={details.ID}
            template={details}
            deletedContact={handdleDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactContainer;
