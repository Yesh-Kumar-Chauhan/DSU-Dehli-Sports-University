import React, { SVGProps } from 'react';

const SvgGetApp = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M14.17 11H13V5h-2v6H9.83L12 13.17z' opacity={0.3} />
			<path d='M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z' />
		</svg>
	);
};

export default SvgGetApp;
