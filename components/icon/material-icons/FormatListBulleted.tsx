import React, { SVGProps } from 'react';

const SvgFormatListBulleted = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 5h14v2H7z' />
			<circle cx={4} cy={6} r={1.5} />
			<path d='M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z' />
			<circle cx={4} cy={12} r={1.5} />
		</svg>
	);
};

export default SvgFormatListBulleted;
