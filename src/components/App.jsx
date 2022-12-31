import React, { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={filterHandler} value={filterData} />
      <Contacts contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};
