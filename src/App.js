import React from "react";
import ShipPlacementOptions from './components/ShipPlacementOptions';

import { connect } from "react-redux";
import { getBoard, updateBoard, placeShip } from './store/actions';

import "./styles.css";

const mapStateToProps = ({ board }) => ({
	board
})

const mapDispatchToProps = {
	getBoard,
	updateBoard,
	placeShip
}

function App({ board, placeShip }) {
	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>My battleshit app</h2>

			<ShipPlacementOptions />
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

