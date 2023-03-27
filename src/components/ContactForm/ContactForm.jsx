import { useState } from "react";
import css from "./ContactForm.module.css";

export const ContactForm = ({createContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
    
      default:
        setNumber(target.value);
        break;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    createContact({
      name: name,
      number: number,
    });
    setName('');
    setNumber('');
  };
    return (
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <div className={css.formContainer}>
          <label htmlFor="InputName" className={css.inputName}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="InputName"
            className={css.inputContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
          <label htmlFor="InputNumber" className={css.inputName}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            id="InputNumber"
            className={css.inputContact}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
          <button type="submit" className={css.submit}>
            Add contact
          </button>
        </div>
      </form>
    );
  }