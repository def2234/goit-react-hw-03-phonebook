import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, Btn, Label, P, Input } from './FormContacts-styled';

export class FormContacts extends Component {
  static propTypes = {
    createContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleAddContact = e => {
    if (this.state.name === '') {
      return;
    }
    this.props.createContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form>
        <Label>
          <P>Name</P>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </Label>

        <Label>
          <P>Number</P>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </Label>

        <Btn
          type="button"
          disabled={this.state.name === '' ? true : false}
          name="addContact"
          onClick={this.handleAddContact}
        >
          Add Contact
        </Btn>
      </Form>
    );
  }
}

export default FormContacts;
