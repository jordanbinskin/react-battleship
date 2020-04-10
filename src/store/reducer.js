import * as actionTypes from './actionTypes';


//  ship is [[1,0], [1,1], [1,2]]

const initialBoardState = [...new Array(8*8)].map(_ => ({
    state: 'none', // enum none|hit|miss
    ship: null, // a section of a shit
}));


const initState = {
    board: initialBoardState,
    ships: {
        player1: [/*ships*/],
        player2: [/*ships*/]
    }
}

const reducer = (state = initState, action) => {
    switch(action.type) { 
        case actionTypes.GET_BOARD:
            return {
                ...state
            }
            
        case actionTypes.UPDATE_BOARD:
            return {
                ...state,
                board: {
                    ...state.board
                }
            }

        case actionTypes.PLACE_SHIP:
            const s = {
                ...state,
                board: state.board.map((cell, index) => {
                    if (index !== action.startPos) return cell;
                    return {
                        ...cell,
                        ship: true
                    }
                })
            }

            console.log('PLACE', action, s);

            return s

        default:
            return {...state}
    }
}

export default reducer;