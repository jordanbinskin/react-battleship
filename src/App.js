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

const ships = {
  destroyer:  { size: 2, limit: 2 },
  cuirser:    { size: 3, limit: 1 },
  battleShit: { size: 4, limit: 1 }
}

// function onClickHandler(index) {
//   console.log('clicked', index)
//   //  which phase
//     //  hand over to state change methods
// }

function App({ board, ships, placeShip }) {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>My battleshit app</h2>

      <Grid>
        { board.map((_, index) => 
            <Cell key={index}
              onClickHandler={() => {
                console.log(index)
                placeShip(index)
              }}
            />
        )}
      </Grid>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

