export const NOOP = () => { /* NOOP */ }

//	Transform any string to a version where the first character is capitalised.
export const capitalise = str => str[0].toUpperCase() + str.substring(1);

//	convert any coord back to its grid index
export const coordToIndex = pos => (pos[1] * 8) + pos[0];

//	convert a grid index id to an [x,y] coord
export const indexToCoord = (index) => [index % 8, Math.floor(index / 8)];

//	add two coordinates together
export const addVector = (pos1, pos2) => [
	pos1[0] + pos2[0],
	pos1[1] + pos2[1]
];

//	get the array index for any location, moved by a delta coord of [x,y]
export const transformIndex = (index, delta) => {
	const pos = indexToCoord(index);
	const offset = addVector(pos, delta);
	return coordToIndex(offset);
}

//	comparison maths for coordinates
export const maths = pos1 => {
	const compare = (axis) => ({
		equal: pos2 => pos1[axis] === pos2[axis],

		largerThan: pos2 => pos1[axis] > pos2[axis],
		largerOrEqualTo: pos2 => pos1[axis] >= pos2[axis],

		smallerThan: pos2 => pos1[axis] < pos2[axis],
		smallerOrEqualTo: pos2 => pos1[axis] <= pos2[axis]
	});

	return {
		x: compare(0),
		y: compare(1)
	}
}
