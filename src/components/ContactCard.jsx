import React from 'react'
import "../CSS/ContactCard.css"

const ContactCard = ({template, deletedContact}) => {
  return (
    <div className='contactCard'>
    <h2>{template?.Name?.charAt(0).toUpperCase()}</h2>
    <ul>
        <li>{template?.Name}</li>
        <li>{template?.Tel}</li>
        <li>{template?.Email}</li>
        <li>{template?.ID}</li>
        <li>{template?.Note}</li>
        <button onClick={deletedContact}>delete</button>
    </ul>
    </div>
  )
}

export default ContactCard
