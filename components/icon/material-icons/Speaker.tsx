import React, { SVGProps } from 'react';

const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M7 4v16h10V4H7zm5 1c1.1 0 2 .9 2 2s-.9 2-2 2a2 2 0 110-4zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z'
				opacity={0.3}
			/>
			<path d='M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 20V4h10v16H7zm5-11c1.1 0 2-.9 2-2s-.9-2-2-2a2 2 0 100 4zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
		</svg>
	);
};

export default SvgSpeaker;
