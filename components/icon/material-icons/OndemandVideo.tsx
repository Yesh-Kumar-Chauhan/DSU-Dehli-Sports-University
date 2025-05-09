import React, { SVGProps } from 'react';

const SvgOndemandVideo = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 17h18V5H3v12zM9 7l7 4-7 4V7z' opacity={0.3} />
			<path d='M9 7v8l7-4zm12-4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z' />
		</svg>
	);
};

export default SvgOndemandVideo;
