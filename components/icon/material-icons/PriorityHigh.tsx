import React, { SVGProps } from 'react';

const SvgPriorityHigh = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<circle cx={12} cy={19} r={2} />
			<path d='M10 3h4v12h-4z' />
		</svg>
	);
};

export default SvgPriorityHigh;
