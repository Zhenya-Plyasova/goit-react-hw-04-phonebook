import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {
  const [contacts, setContacts] = useState(() => { return JSON.parse(localStorage.getItem('contacts')) ?? [] });
  const [filter, setFilter] = useState('');

  const createContact = data => {
    const checkNewContact = contacts.find(({name})=>name===data.name);
    if (checkNewContact){
      return alert (`${data.name} is already in contacts`)
    };
    const newContact = {
      id: nanoid(),
      ...data,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts)=>prevContacts.filter((contact)=>contact.id!==id),)
  };

  const filterContacts = (e) => {
    setFilter(e.currentTarget.value.toLowerCase())
  }
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

  useEffect(() => {
       (contacts.length!==0) && localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    [contacts]
  );
 
    return (
      <div
        style={{
          fontSize: 20,
          color: '#010101',
          margin: 30,
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm createContact={createContact} />

        <h2>Contacts</h2>

        <Filter onChange={filterContacts} value = {filter} />
        <ContactList handleDelete= {handleDelete} contactsList = {filteredContacts} />
      </div>
    );
  }

