import styled from 'styled-components';

export const List = styled.ul`
	margin: 24px 0 0;
	border-radius: 5px;
	
`

export const ListItem = styled.li`
	position: relative;
	background-color: #000;
	display: flex; 
	justify-content: space-between;
	align-items: center;
	margin: 2px 0 0;
	border-bottom: 1px solid transparent;
	padding: 20px 0 20px 10px;
	padding-left: 10px;
	border-radius: 5px;
	transition: border 250ms linear;

	:first-child{
		margin: 0;
	}
	:hover{
		border-bottom: 1px solid #fff;
	}
`

export const ItemInfo = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`

export const Info = styled.span`
	color: #fff;
	font-weight: 500;
	font-size: 16px;
`

export const DeleteButton = styled.button`
position: absolute;
right: -25px;
	width: 50px;
	height: 50px;
	background-color: #000;
	color: #fff;
	font-weight: 900;
	font-size: 16px;
	border-radius: 50%;
	border: 3px solid rgb(28, 27, 27);
	transition: transform 250ms linear;

	:hover, :focus {
		transform: scale(1.2);
	}
`