import PropTypes from 'prop-types';
import { SectionTag } from './Section.styled'

export const Section = ({ children }) => {
	return <SectionTag>{children}</SectionTag>
}

Section.propTypes = {
	children: PropTypes.node,
}