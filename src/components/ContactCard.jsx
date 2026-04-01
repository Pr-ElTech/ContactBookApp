import React from "react";
import "../CSS/ContactCard.css";

const ContactCard = ({ template, deletedContact, saveInput, inputEdit }) => {
  return (
    <div className="contactCard">
      {" "}
      {inputEdit ? (
        <>
          <h2>{template?.Name?.charAt(0).toUpperCase()}</h2>
          <ul>
            <li>{template?.Name}</li>
            <li>{template?.Tel}</li>
            <li>{template?.Email}</li>
            <li>{template?.Date}</li>
            <li>{template?.Note}</li>
            <button onClick={() => deletedContact(template.ID)}>Delete</button>
            <button onClick={() => inputEdit(template.ID)}>Edit</button>
          </ul>
        </>
      ) : (
        <>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button onClick={() => saveInput(template.ID)}>Save Changes</button>
        </>
      )}
    </div>
  );
};

export default ContactCard;
