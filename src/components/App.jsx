import { useState } from 'react';
import { nanoid } from 'nanoid'

import { PhoneBook } from '../components/PhoneBook/PhoneBook'
import { ContactsList } from './ContactsList/ContactsList'
import { Container } from './Container/Container'
import { Filter } from './Filter/Filter'
import { DefaultPage } from './DefaultPage/DefaultPage'
import { Modal } from './Modal/Modal'
import { Alert } from './ModalAlert/ModalAlert'

import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from 'redux/contacts/contactsSelector';
import { addContact } from 'redux/contacts/contactsSlice';
import { filterContact } from 'redux/contacts/filterSlice';


export function App() {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContact);

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

	const submitHandler = (name, number) => {
		const names = contacts.map(contact => contact.name.toLowerCase())

		if (names.includes(name.toLowerCase())) {
			toggleModal();
			return;
		}

		const newContact = {
			name,
			number,
			id: nanoid(),
		}

		dispatch(addContact(newContact));
	}

	const toggleModal = () => {
		setShowModal(prevSate => !prevSate)
	}

	const changeFilter = query => {
		const filter = dispatch(filterContact(query));

		setFilter(query);

		if (!query) {
			setFilteredContacts([]);
			return;
		}

		setFilteredContacts(contacts.filter(contact => contact.name.toLowerCase().includes(filter.payload)))
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
			{stateMachine.FILTERED_CONTACTS && <ContactsList state={filteredContacts} />}
			{stateMachine.NO_FILTER_RESULTS && <DefaultPage text="There is not such a contact" />}
			{stateMachine.CONTACTS_LIST && <ContactsList state={contacts} />}
		</Container>
	</>
	)
};
