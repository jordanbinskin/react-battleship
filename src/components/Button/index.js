import React from 'react'
import './style.css';

const noop = () => { /* NOOP */ };

export default function Button({ onClick = noop, active = false, children }) {
	const activeClass = active === true ? "active" : "";

	return (
		<button
			onClick={onClick}
			className={activeClass}
		>
			{children || 'Button Label'}
		</button>
	)
}
