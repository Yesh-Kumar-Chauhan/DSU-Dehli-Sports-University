import React, { SVGProps } from 'react';

const SvgInfoOutline = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<g fill='none'>
				<path d='M0 0h24v24H0V0z' />
				<path d='M0 0h24v24H0V0z' opacity={0.87} />
			</g>
			<path d='M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z' />
		</svg>
	);
};

export default SvgInfoOutline;
