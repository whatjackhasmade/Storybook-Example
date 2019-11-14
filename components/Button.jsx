import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;

	background: transparent;

	color: inherit;
	font: inherit;

	line-height: normal;

	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;

	-webkit-appearance: none;

	padding: 16px 24px;

	background-color: black;
	background-color: ${props => props.colour};
	color: white;
	font-size: 16px;
	font-weight: 700;
`;

const Button = ({ children, colour, onClick, text }) => {
	return (
		<StyledButton colour={colour} onClick={onClick}>
			{children ? children : text}
		</StyledButton>
	);
};

export default Button;
