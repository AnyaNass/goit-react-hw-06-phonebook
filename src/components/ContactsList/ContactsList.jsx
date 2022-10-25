import PropTypes from 'prop-types';
import { FaMobileAlt, FaRegTrashAlt } from 'react-icons/fa';
import { List, ListItem, ItemInfo, Info, DeleteButton } from './ContactsList.styled'

export const ContactsList = ({ state, deleteContact }) => {
	return (
		<List>
			{state.map(item => {
				return <ListItem key={item.id}>
					<ItemInfo>
						<Info><FaMobileAlt /></Info>
						<Info>{item.name}:</Info>
						<Info>{item.number}</Info>
					</ItemInfo>
					<DeleteButton type="button" onClick={() => deleteContact(item.id)}><FaRegTrashAlt /></DeleteButton>
				</ListItem>
			})}
		</List >
	)
}

ContactsList.propTypes = {
	state: PropTypes.arrayOf(PropTypes.object).isRequired,
	deleteContact: PropTypes.func.isRequired,
}