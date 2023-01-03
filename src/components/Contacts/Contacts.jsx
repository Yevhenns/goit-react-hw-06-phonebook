import React from 'react';
import { ContactItem } from './ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';
import { getContactsFilter, getContactsArray } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

import css from './Contacts.module.css';

export const Contacts = () => {
  const contactsList = useSelector(getContactsArray);
  const filter = useSelector(getContactsFilter);

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.listItem} key={nanoid()}>
            <ContactItem
              id={id}
              name={name}
              number={number}
              // deleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};
