import React, { SVGProps } from 'react';

const SvgFilter4 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M21 3H7v14h14V3zm-4 12h-2v-4h-4V5h2v4h2V5h2v10z' opacity={0.3} />
			<path d='M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zm4-4h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM7 3h14v14H7V3zm8 6h-2V5h-2v6h4v4h2V5h-2z' />
		</svg>
	);
};

export default SvgFilter4;
