import React from "react";

export const ContactItem = ({ contacts }) => {
    return (<>
        {contacts.map(({ name, id, number }) => (
            <li key={id}>
                {name}: {number}
            </li>
        ))}
    </>)
};