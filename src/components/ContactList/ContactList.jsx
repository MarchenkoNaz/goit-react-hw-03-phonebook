import PropTypes from 'prop-types'

const ContactList = ({ contacts, filter, deleteContact }) => {
	const contactsFilteredByName = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))


	return (<>
		<h1 className="display-3">Contact List</h1>
		<ul className="list-group m-auto container-sm">
			{contactsFilteredByName.map(contact =>
				<li key={contact.id} className="list-group-item d-flex justify-content-between">
					<div>
						<p className='mb-1'>Name: {contact.name}</p>
						<p className='m-0'>Number: {contact.number}</p>
					</div>
					<button type="button" className="btn btn-outline-danger" onClick={() => deleteContact(contact.id)}>Delete</button>
				</li>
			)}
		</ul>
	</>)

}

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	deleteContact: PropTypes.func.isRequired,
}

export default ContactList