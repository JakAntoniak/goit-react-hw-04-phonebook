import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  addContact = event => {
    event.preventDefault();

    const nameInput = document.querySelector('#name').value;

    const numberInput = document.querySelector('#number').value;
    const { contacts } = this.state;

    const nameExists = contacts.some(contact => contact.name === nameInput);

    if (nameExists) {
      alert(`${nameInput} is already present in the phonebook`);
      return;
    }
    const newContact = {
      id: `id-${nanoid()}`,
      name: nameInput,
      number: numberInput,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = event => {
    event.preventDefault();

    const targetName = event.target.name;
    const newContacts = [...this.state.contacts];

    const targetIndex = newContacts.findIndex(
      element => element.name === targetName
    );

    newContacts.splice(targetIndex, 1);

    this.setState(() => ({
      contacts: newContacts,
    }));
  };

  handleFilterUpdate = event => {
    event.preventDefault();

    const newFilterValue = document.querySelector('#filter-input').value;

    this.setState(() => ({
      filter: newFilterValue,
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter handleFilterUpdate={this.handleFilterUpdate} />
        <ContactList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
          filter={this.state.filter}
        />
      </>
    );
  }
}

export default Phonebook;
