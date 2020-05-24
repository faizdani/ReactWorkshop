import React, { useState } from 'react';
import { ContactList } from "./ContactList.js"
import { contacts } from "./Contact.js"

/*
import './index.css';
import App from './App';
*/

export const App = () => {

    // const [contacts] = useState(data);
    // const [stateVariable, setStateFn] = useState("initialValue");

    const stateArray = useState(contacts);
    const stateVariable = stateArray[0];
    const stateFn = stateArray[1];

    const deleteContact = (id) => {
        console.log(id);
        const newContacts = stateVariable.filter((contact) => contact.id !== id);
        stateFn(newContacts);
    };

    return (
        <section id="contact-list">
            <h1>Contacts</h1>
            <ContactList contacts={stateVariable} deleteContact={deleteContact}></ContactList>
        </section>
    );
}

//export default App;
