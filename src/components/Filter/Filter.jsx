import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { FilterWrapper, FilterField, Label, FilterInput } from './Filter.styled'

export const Filter = ({ onChange }) => {
	return (
		<FilterWrapper>
			<FilterField>
				<Label><FaSearch /></Label>
				<FilterInput type="text" onChange={onChange} />
			</FilterField>
		</FilterWrapper>
	)
}

Filter.propTypes = {
	onChange: PropTypes.func.isRequired,
}
