import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import { Backdrop, ModalContent, ModalCloseBtn } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, children }) {
	const handleKeyDown = (e) => {
		if (e.code === "Escape") {
			onClose();
		}
	}

	const handleBackdropclick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	return createPortal(
		<Backdrop onClick={handleBackdropclick}>
			<ModalContent>{children}
				<ModalCloseBtn type='button' onClick={onClose}><FaTimes /></ModalCloseBtn>
			</ModalContent>
		</Backdrop>,
		modalRoot)
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
}