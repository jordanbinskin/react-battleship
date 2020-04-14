import React, { useState } from 'react'
import { capitalise } from '../utils';
import { shipConfigs } from '../context/ships';


import Button from './Button/index';
import PlacementGrid from './PlacementGrid';

export default function PlacementOtions() {
	const ships = shipConfigs;

	const [selection, setSelection] = useState(0);
	const [direction, setDirection] = useState('vertical');

	const getSelectedShip = () => ships[selection];

	const ShipSelection = () => {
		return (
			<div className="button-group">
				{
					ships.map((ship, i) =>
						<Button key={i}
							active={i === selection}
							onClick={(e) => setSelection(i)}
						>
							{ship.name}
						</Button>
					)
				}
			</div>
		)
	}

	const OrientationSelection = () => (
		<div className="button-group">
			<Button
				onClick={() => setDirection('vertical')}
				active={direction === 'vertical'}
			>
				vertical
			</Button>

			<Button
				onClick={() => setDirection('horizontal')}
				active={direction === 'horizontal'}
			>
				Horizontal
			</Button>
		</div>
	)


	return (
		<>
			<ShipSelection />

			<OrientationSelection />

			<p>
				{shipConfigs[selection].name}<br />
				{shipConfigs[selection].length}<br />
				{capitalise(direction)}
			</p>

			<PlacementGrid ship={getSelectedShip()} direction={direction} />
		</>
	)
}
