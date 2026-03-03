import ContactCard from '../components/ContactCard'
import '../CSS/ContactContainer.css'

import React from 'react'

const ContactContainer = () => {
const contacts = [
    {
    ID :0,
    Name: "Wale",
    Tel: "09125102349",
    Email: "waletech@gmail.com",
    Date: "03/03/2026",
    Note: "Family"
    },
    {
    ID :1,
    Name: "Tony",
    Tel: "09156221349",
    Email: "tonytech@gmail.com",
    Date: "03/03/2026",
    Note: "Brother"
    },
    {
    ID :2,
    Name: "Marry",
    Tel: "091231456880",
    Email: "marrytech@gmail.com",
    Date: "03/03/2026",
    Note: "Sister"
    }
]

  return (
    <div className='ContactContainer'>
{        contacts.map((details)=> (  <ContactCard key={details.ID} template = {details}/>))
 }  
    </div>
  )
}

export default ContactContainer
