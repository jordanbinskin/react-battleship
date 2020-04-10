import React from "react";

const cellBaseStyle = {
	width: "20px",
	height: "20px",
	borderRadius: "3px",
	border: '1px solid #3333',
	cursor: 'crosshair'
};

export default function Cell({ ship = null, state = "none", key, onClickHandler }) {
	let backgroundColor = "#33f";
	if (ship !== null) backgroundColor = '#f4f4f4';

	let marker = " ";

	if (state === "hit") {
		marker = "X";
		backgroundColor = '#f66';
	}

	if (state === "miss") {
		marker = "O";
		backgroundColor = '#393'
	}

	const cellStyle = Object.assign({},
		cellBaseStyle,
		{ backgroundColor }
	);

	return (
		<div 
			style={cellStyle}
			onClick={onClickHandler}
		>
			{marker}
		</div>
	)
}
