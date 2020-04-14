import React from 'react';

const gridParentStyle = {
	display: 'inline-grid',
	gridTemplateColumns: 'repeat(8, 20px)',
	gridTemplateRows: 'repeat(8, 20px)',
	gridGap: '5px',
	cursor: 'crosshair'
}

export default function Grid(props) {
	return (
		<div style={{ margin: '2rem auto' }}>
			<div style={gridParentStyle}>
				{props.children}
			</div>
		</div>
	)
}
