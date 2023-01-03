import { getContactsArray } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

import css from './Form.module.css';

export const Form = () => {
  const contacts = useSelector(getContactsArray);
  const dispatch = useDispatch();

  const handleNameChange = e => {
    return e.currentTarget.value;
  };

  const handleNumberChange = e => {
    return e.currentTarget.value;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const item = { name, number };
    e.target.reset();

    const isDublicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    isDublicate
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(item));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="nameItem">Name</label>
      <input
        id="nameItem"
        onChange={handleNameChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Boris Johnsoniuk"
      />
      <label htmlFor="numberItem">Number</label>
      <input
        id="numberItem"
        onChange={handleNumberChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="067 111 22 33"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
