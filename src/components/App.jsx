import React, { Component } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
	state = {
		contacts: [],
		name: '',
		filter: '',
	}

	componentDidMount() {
		if (!!localStorage.getItem('contacts')) {
			this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.contacts.length !== this.state.contacts.length) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
		}
	}


	addContact = (contact) => {
		const newContact = { id: nanoid(), ...contact };
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
		return (<>
			<ContactForm addContact={this.addContact} />
			<Filter filter={filter} onChange={this.onFilter} />
			<ContactList contacts={contacts} filter={filter} deleteContact={this.deleteContact} />
			<ToastContainer />
		</>
		)
	}
}

export default App