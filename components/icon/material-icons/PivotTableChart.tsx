import React, { SVGProps } from 'react';

const SvgPivotTableChart = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M21 5c0-1.1-.9-2-2-2h-9v5h11V5zM3 19c0 1.1.9 2 2 2h3V10H3v9zM3 5v3h5V3H5c-1.1 0-2 .9-2 2zM18 9l-4 4h3v2c0 1.1-.9 2-2 2h-2v-3l-4 4 4 4v-3h2c2.21 0 4-1.79 4-4v-2h3l-4-4z' />
		</svg>
	);
};

export default SvgPivotTableChart;
