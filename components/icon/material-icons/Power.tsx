import React, { SVGProps } from 'react';

const SvgPower = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M8 13.65l3.5 3.52V19h1v-1.83l3.5-3.51V9H8z' opacity={0.3} />
			<path d='M16 7V3h-2v4h-4V3H8v4h-.01C6.89 7 6 7.89 6 8.98v5.52L9.5 18v3h5v-3l3.5-3.5V9c0-1.1-.9-2-2-2zm0 6.66l-3.5 3.51V19h-1v-1.83L8 13.65V9h8v4.66z' />
		</svg>
	);
};

export default SvgPower;
