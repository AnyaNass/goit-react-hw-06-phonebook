import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { FaSearch } from 'react-icons/fa';
import { FilterWrapper, FilterField, Label, FilterInput } from './Filter.styled'

export const Filter = () => {
	const dispatch = useDispatch();

	return (
		<FilterWrapper>
			<FilterField>
				<Label><FaSearch /></Label>
				<FilterInput type="text" onChange={e => dispatch(filterContact(e.target.value.toLocaleLowerCase()))} />
			</FilterField>
		</FilterWrapper>
	)
}

