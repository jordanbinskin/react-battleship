import { GET_BOARD,  UPDATE_BOARD, PLACE_SHIP } from "./actionTypes";

export const getBoard = () => ({
    type: GET_BOARD
});

export const updateBoard = (update) => ({
    type: UPDATE_BOARD,
    payload: update
})

export const placeShip = (startPos, length = 0, direction = 'none') => ({
    type: PLACE_SHIP,
    startPos,
    length,
    direction
})