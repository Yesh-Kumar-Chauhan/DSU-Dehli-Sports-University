import React, { SVGProps } from 'react';

const SvgUpgrade = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z' />
		</svg>
	);
};

export default SvgUpgrade;
