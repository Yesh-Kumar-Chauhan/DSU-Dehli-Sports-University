import React, { SVGProps } from 'react';

const SvgSlideshow = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 19h14V5H5v14zm5-11l5 4-5 4V8z' opacity={0.3} />
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM10 8v8l5-4z' />
		</svg>
	);
};

export default SvgSlideshow;
