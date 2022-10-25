import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

import { PhoneBook } from '../components/PhoneBook/PhoneBook'
import { ContactsList } from './ContactsList/ContactsList'
import { Container } from './Container/Container'
import { Filter } from './Filter/Filter'
import { DefaultPage } from './DefaultPage/DefaultPage'
import { Modal } from './Modal/Modal'
import { Alert } from './ModalAlert/ModalAlert'

export function App() {
	const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
	const [filter, setFilter] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [filteredContacts, setFilteredContacts] = useState([]);

	const stateMachine = {
		DEFAULT_PAGE: contacts.length === 0,
		FILTER_FIELD: contacts.length > 0,
		FILTERED_CONTACTS: filteredContacts.length > 0,
		NO_FILTER_RESULTS: filteredContacts.length === 0 && filter,
		CONTACTS_LIST: contacts.length > 0 && !filter && filteredContacts.length === 0,
	}

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts]);

	const submitHandler = (name, number) => {
		const names = contacts.map(contact => contact.name.toLowerCase())

		if (names.includes(name.toLowerCase())) {
			toggleModal();
			return;
		}

		setContacts([...contacts, { name: name, id: nanoid(), number: number }])
	}

	const deleteContact = (itemId) => {
		setContacts(contacts.filter(contact => contact.id !== itemId))
	}

	const toggleModal = () => {
		setShowModal(prevSate => !prevSate)
	}

	const changeFilter = e => {
		const query = e.target.value;

		setFilter(query);

		if (!query) {
			setFilteredContacts([]);
			return;
		}

		const normalizedFilter = query.toLowerCase();
		setFilteredContacts(contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)))
	}

	return (<>
		<Container text="PhoneBook">
			{showModal && <Modal onClose={toggleModal}>
				<Alert text="This name is already in contacts." />
			</Modal>}
			<PhoneBook onSubmit={submitHandler} />
		</Container>
		<Container text="Contacts">
			{stateMachine.DEFAULT_PAGE && <DefaultPage text="Add someone to your contacts" />}
			{stateMachine.FILTER_FIELD && <Filter onChange={changeFilter} />}
			{stateMachine.FILTERED_CONTACTS && <ContactsList state={filteredContacts} deleteContact={deleteContact} />}
			{stateMachine.NO_FILTER_RESULTS && <DefaultPage text="There is not such a contact" />}
			{stateMachine.CONTACTS_LIST && <ContactsList state={contacts} deleteContact={deleteContact} />}
		</Container>
	</>
	)
};
