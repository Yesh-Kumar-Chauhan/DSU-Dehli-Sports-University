import React, { SVGProps } from 'react';

const SvgSmartDisplay = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 18.01h16V5.99H4v12.02zM9.5 7.5l7 4.5-7 4.5v-9z' opacity={0.3} />
			<path d='M9.5 7.5v9l7-4.5z' />
			<path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14.01H4V5.99h16v12.02z' />
		</svg>
	);
};

export default SvgSmartDisplay;
