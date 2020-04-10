import React from "react";
import Cell from './components/Cell';
import Grid from './components/Grid';
import { connect } from "react-redux";
import  { getBoard, updateBoard, placeShip } from './store/actions';

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

      <Grid>
        { board.map((cell, index) => 
            <Cell ship={cell.ship} key={index}
              onClickHandler={() => placeShip(index)}
            />
        )}
      </Grid>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

