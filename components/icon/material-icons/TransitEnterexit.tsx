import React, { SVGProps } from 'react';

const SvgTransitEnterexit = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z' />
		</svg>
	);
};

export default SvgTransitEnterexit;
