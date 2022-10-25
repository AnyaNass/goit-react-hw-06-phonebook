import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaUserAlt, FaPhoneAlt, FaUserPlus } from 'react-icons/fa';
import { Form, FormWrapper, FormField, FormLable, AddButton } from './PhoneBook.styled'

export function PhoneBook({ onSubmit }) {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const handleInputChange = e => {
		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;
			case "number":
				setNumber(e.target.value);
				break;
			default: return;
		}
	}

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(name, number);
		setName('');
		setNumber('');
	}

	return (
		<Form onSubmit={handleSubmit}>
			<FormWrapper>
				<FormField
					type="text"
					name="name"
					placeholder="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={name}
					onChange={handleInputChange}
				/>
				<FormLable><FaUserAlt /></FormLable>
			</FormWrapper>
			<FormWrapper>
				<FormField
					type="tel"
					name="number"
					placeholder="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					value={number}
					onChange={handleInputChange}
				/>
				<FormLable><FaPhoneAlt /></FormLable>
			</FormWrapper>
			<AddButton type="submit"><FaUserPlus /></AddButton>
		</Form >
	)
};

PhoneBook.propTypes = {
	onSubmit: PropTypes.func,
}
