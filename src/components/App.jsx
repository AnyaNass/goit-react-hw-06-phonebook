import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid'
import { selectContact } from 'redux/contacts/contactsSelector';
import { addContact } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/filterSelector';
import { PhoneBook } from '../components/PhoneBook/PhoneBook'
import { ContactsList } from './ContactsList/ContactsList'
import { Container } from './Container/Container'
import { Filter } from './Filter/Filter'
import { DefaultPage } from './DefaultPage/DefaultPage'
import { Modal } from './Modal/Modal'
import { Alert } from './ModalAlert/ModalAlert'

export function App() {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContact);
	const filter = useSelector(selectFilter);
	const [showModal, setShowModal] = useState(false);

	const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter));

	const stateMachine = {
		DEFAULT_PAGE: contacts.length === 0,
		FILTER_FIELD: contacts.length > 0,
		FILTERED_CONTACTS: filteredContacts.length > 0 && filter,
		NO_FILTER_RESULTS: filteredContacts.length === 0 && contacts.length > 0,
		CONTACTS_LIST: contacts.length > 0 && !filter,
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

	return (<>
		<Container text="PhoneBook">
			{showModal && <Modal onClose={toggleModal}>
				<Alert text="This name is already in contacts." />
			</Modal>}
			<PhoneBook onSubmit={submitHandler} />
		</Container>
		<Container text="Contacts">
			{stateMachine.DEFAULT_PAGE && <DefaultPage text="Add someone to your contacts" />}
			{stateMachine.FILTER_FIELD && <Filter />}
			{stateMachine.FILTERED_CONTACTS && <ContactsList state={filteredContacts} />}
			{stateMachine.NO_FILTER_RESULTS && <DefaultPage text="There is not such a contact" />}
			{stateMachine.CONTACTS_LIST && <ContactsList state={contacts} />}
		</Container>
	</>
	)
};
