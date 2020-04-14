import React, { useState } from 'react';
import Grid from './Grid';
import Cell from './Cell';

import { transformIndex, indexToCoord, addVector, maths } from '../utils';


const newCoordSystem = () => [...new Array(8 * 8)].map(_ => ({ ship: null, state: 'none' }));

const createShipPlacement = (type, position, direction) => ({
	type,
	cells: getShipCells(position, type.length, direction)
});


const getShipCells = (position, length, direction) => {
	return [...new Array(length)]
		.map((_, offset) => transformIndex(
			position,
			[
				direction === 'horizontal' ? offset : 0,
				direction === 'vertical' ? offset : 0
			]
		));
}


const isShipInBounds = (position, length, direction) => {
	const coord = maths(indexToCoord(position));

	const boundary = addVector([7, 7], [
		direction === 'horizontal' ? -(length - 1) : 0,
		direction === 'vertical' ? -(length - 1) : 0
	]);

	if (direction === 'horizontal')
		return coord.x.smallerOrEqualTo(boundary);

	if (direction === 'vertical')
		return coord.y.smallerOrEqualTo(boundary);

	throw new TypeError('Clearly, the direction is not a correct value');
}

const areCellsAvailable = (ships, position, length, direction) => {
	return true;
}

const getPreview = (ships, position, length, direction) => {
	return {
		cells: getShipCells(position, length, direction),
		isValid: (
			isShipInBounds(position, length, direction) ||
			areCellsAvailable(ships, position, length, direction)
		)
	}
}

const getPlacements = (ships) => ships.flatMap(ship => ship.cells, Infinity);

export default function PlacementGrid({ ship, direction }) {
	const [state, setState] = useState({
		ships: [],
		cells: newCoordSystem(),
		preview: -100
	});

	const placements = getPlacements(state.ships);
	const preview = getPreview(state.ships, state.preview, ship.length, direction);

	console.log(placements);

	const resetPreview = () => setPreview(-100);
	const setPreview = (index) => setState({
		...state,
		preview: index
	});

	const placeShipHere = (type, index) => setState({
		...state,
		ships: [...state.ships, createShipPlacement(type, index, direction)]
	});

	const renderCells = cells => cells.map((cell, i) => {
		const isPreview = preview.cells.includes(i);
		const isValid = isPreview ? (!preview.isValid ? 'hit' : 'none') : 'none';

		let cellContainsShip = isPreview || placements.includes(i);

		return (
			<Cell key={i}
				ship={cellContainsShip}
				state={isValid}

				onClick={() => placeShipHere(ship, i)}

				onMouseEnter={() => setPreview(i)}
				onMouseLeave={() => resetPreview()}
			/>
		)
	});

	return <Grid>{renderCells(state.cells)}</Grid>
}
