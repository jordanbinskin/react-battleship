import React from "react";
import { NOOP } from '../utils';

const cellBaseStyle = {
	width: "20px",
	height: "20px",
	borderRadius: "3px",
	border: '1px solid #3333'
};

const getMarkerSymbol = (state) => {
	if (state === 'hit') return 'X';
	if (state === 'miss') return 'O';

	return ' ';
}

const getBackgroundColor = (ship) => {
	if (!!ship) return '#f4f4f4';
	return '#33f';
}

export default function Cell(props) {
	const { ship = null, state = "none" } = props;
	const {
		onClick = NOOP,
		onMouseEnter = NOOP,
		onMouseLeave = NOOP
	} = props;

	let marker = getMarkerSymbol(state);
	let backgroundColor = getBackgroundColor(ship);

	const cellStyle = Object.assign({},
		cellBaseStyle,
		{ backgroundColor }
	);

	return (
		<div
			style={cellStyle}

			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{marker}
		</div>
	)
}
