import React, { SVGProps } from 'react';

const SvgModeComment = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm0 15.17L18.83 16H4V4h16v13.17z' />
			<path d='M4 4v12h14.83L20 17.17V4z' opacity={0.3} />
		</svg>
	);
};

export default SvgModeComment;
