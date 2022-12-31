import { getContactsArray } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import css from './Form.module.css';

export const Form = () => {
  const contacts = useSelector(getContactsArray);
  const dispatch = useDispatch;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.name.value;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact(contact));
    form.reset();
  };
};

return (
  <form className={css.form} onSubmit={handleSubmit}>
    <label htmlFor="nameItem">Name</label>
    <input
      id="nmeItem"
      value={name}
      onChange={handleNameChange}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
    <label htmlFor="numberItem">Number</label>
    <input
      id="numberItem"
      value={number}
      onChange={handleNumberChange}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    />
    <button type="submit">Add contact</button>
  </form>
);
