import styled from 'styled-components';

export const Form = styled.form`
	margin: 24px 0 0;
	position: relative;
`
export const FormWrapper = styled.label`
position: relative;
`

export const FormLable = styled.span`
	color: white;
	position: absolute;
	top: 30px;
	left: 50px;
	z-index: 1;
	text-transform: lowercase;
	font-weight: 100;
`

export const FormField = styled.input`
	width: 100%;
	background-color: #000;
	border: none;
	padding: 15px 10px 15px 80px;
	display: block;
	outline: none;
	color: #fff;
	margin: 2px 0 0;
	border-bottom: 1px solid transparent;
	border-radius: 5px;
	transition: border 250ms linear;

	:focus{
		border-bottom: 1px solid #fff;
	}
`

export const AddButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%) scale(1);
	right: -25px;
	width: 50px;
	height: 50px;
	background-color: #000;
	color: #fff;
	font-weight: 900;
	font-size: 16px;
	border-radius: 50%;
	border: 5px solid rgb(28, 27, 27);

	transition: transform 250ms linear;

	:hover, :focus {
		transform: translateY(-50%) scale(1.2);
	}
`