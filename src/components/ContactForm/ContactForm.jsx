import React, { Component } from 'react'


class ContactForm extends Component {
	state = {
		name: '',
		number: ''
	}


	handleSubmit = (e) => {
		e.preventDefault()
		const contact = {
			name: this.state.name,
			number: this.state.number
		}
		this.props.addContact(contact)
		this.setState({
			name: '',
			number: ''
		})

	}

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {

		return (<>
			<h1 className="display-3">Phonebook</h1>
			<form className='container-sm' onSubmit={this.handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">Name</label>
					<input className="form-control"
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						value={this.state.name}
						onChange={this.handleChange}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="number" className="form-label">Number</label>
					<input className="form-control"
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						value={this.state.number}
						onChange={this.handleChange}
						required

					/>
				</div>
				<button type="submit" className="btn btn-primary" >Add contact</button>
			</form>
		</>)
	}
}


export default ContactForm