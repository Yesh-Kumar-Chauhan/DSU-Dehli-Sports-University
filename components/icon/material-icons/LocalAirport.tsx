import React, { SVGProps } from 'react';

const SvgLocalAirport = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z' />
			<path d='M0 0h24v24H0V0z' fill='none' />
		</svg>
	);
};

export default SvgLocalAirport;
