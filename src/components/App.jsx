import React, { Component } from "react";
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const currentContact = {name: this.state.name, id: shortid.generate(), number: this.state.number}
    console.log('currentContact:', currentContact);
    
    this.setState(prevState => ({
      contacts: [currentContact, ...prevState.contacts]
    }))
    console.log('contacts:', this.state.contacts);
    this.reset();
  }

  reset = () => {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number, contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(n => n.name.toLowerCase().includes(normalizedFilter));
    
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <button type='submit'>Add contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.changeFilter}></input>
        <ul>
          {visibleContacts.map(({ name, id, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
