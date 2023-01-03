import React from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import css from './App.module.css';

export const App = () => {
  const array = useSelector(getContacts);
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {array.length === 0 ? (
        <p>No contacts to show</p>
      ) : (
        <>
          <Filter />
          <Contacts />
        </>
      )}
    </div>
  );
};
