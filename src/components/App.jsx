import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
	state = {
		contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
		{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
		{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
		name: '',
		filter: '',
	}

	addContact = (contact) => {
		const newContact = { ...contact, id: nanoid() };
		const isDublicated = this.state.contacts.some(
			contact => contact.name === newContact.name
		);
		isDublicated ? toast.info(`Contact ${contact.name} is alredy exsist`) : this.setState({
			contacts: [...this.state.contacts, newContact],
		})
	}

	deleteContact = (contactId) => {
		this.setState({ contacts: this.state.contacts.filter(contact => contactId !== contact.id) })
	}

	onFilter = ({ target: { value } }) => {
		this.setState(() => ({ filter: value }));
	};

	render() {
		const { contacts, filter } = this.state;
		const contactsFilteredByName = contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase())
		);
		return (<>
			<ContactForm addContact={this.addContact} />
			<Filter filter={filter} onChange={this.onFilter} />
			<ContactList contacts={contactsFilteredByName} deleteContact={this.deleteContact} />
			<ToastContainer />
		</>
		)
	}
}

export default App