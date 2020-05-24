import React from "react";

export const ContactList = (props) => {
    const { contacts, deleteContact } = props;

    return (
        <table className="contacts-table">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Remove</th>
                </tr>
                {contacts.map((contact, i) => (
                    <tr key={i}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td onClick={() => deleteContact(contact.id)}>Clear Contact </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

