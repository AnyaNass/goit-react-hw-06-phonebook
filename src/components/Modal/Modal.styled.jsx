import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgb(128, 128, 128, 0.7);
`

export const ModalContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 300px;
	width: 100%;
	min-height: 200px;
	padding: 50px 15px 15px;
	background-color: #fff;
`

export const ModalCloseBtn = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;

	svg{
		width: 25px;
		height: 25px;
	}
`