import React, { SVGProps } from 'react';

const SvgKeyboardHide = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M4 15h16V5H4v10zm13-9h2v2h-2V6zm0 3h2v2h-2V9zm-3-3h2v2h-2V6zm0 3h2v2h-2V9zm-3-3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm0 3h8v2H8v-2zM5 6h2v2H5V6zm0 3h2v2H5V9z'
				opacity={0.3}
			/>
			<path d='M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H4V5h16v10zm-9-9h2v2h-2zm0 3h2v2h-2zM8 6h2v2H8zm0 3h2v2H8zM5 9h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2zm-5 17l4-4H8l4 4z' />
		</svg>
	);
};

export default SvgKeyboardHide;
