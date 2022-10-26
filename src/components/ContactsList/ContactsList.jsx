import { FaMobileAlt, FaRegTrashAlt } from 'react-icons/fa';
import { List, ListItem, ItemInfo, Info, DeleteButton } from './ContactsList.styled'

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';

export const ContactsList = ({ state }) => {
	const dispatch = useDispatch();

	return (
		<List>
			{state.map(item => {
				return <ListItem key={item.id}>
					<ItemInfo>
						<Info><FaMobileAlt /></Info>
						<Info>{item.name}:</Info>
						<Info>{item.number}</Info>
					</ItemInfo>
					<DeleteButton type="button" onClick={() => dispatch(deleteContact(item.id))}><FaRegTrashAlt /></DeleteButton>
				</ListItem>
			})}
		</List >
	)
}
