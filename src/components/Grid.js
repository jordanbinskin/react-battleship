import React from 'react';
import Cell from './Cell';

const gridParentStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 20px)',
    gridTemplateRows: 'repeat(8, 20px)',
    gridGap: '5px'
}

export default function Grid (props) {
    return (
        <div style={gridParentStyle}>
            { props.children }
        </div>
    )
}