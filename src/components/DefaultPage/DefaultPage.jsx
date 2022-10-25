import PropTypes from 'prop-types';
import { DefaultText } from './DefaultPage.styled'

export const DefaultPage = ({ text }) => {
	return <DefaultText>{text}</DefaultText>
}

DefaultPage.propTypes = {
	text: PropTypes.string.isRequired,
}