import React, { Component } from 'react';
import { FormContacts } from './FormContacts/FormContacts.js';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  createContact = data => {
    const toFind = data.name.toLowerCase();
    if (this.state.contacts.find(item => item.name.toLowerCase() === toFind)) {
      alert(`${data.name} is alrady in contacts`);
    } else {
      const createContact = { ...data, id: nanoid() };
      this.setState({
        name: createContact.name,
        number: createContact.number,
        contacts: [...this.state.contacts, createContact],
      });
    }
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalizedName = this.state.filter.toLowerCase();

    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedName)
    );
    return (
      <>
        <h2>Phone book</h2>
        <FormContacts createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={filterContact}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
