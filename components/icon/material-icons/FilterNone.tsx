import React, { SVGProps } from 'react';

const SvgFilterNone = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 3h14v14H7z' opacity={0.3} />
			<path d='M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z' />
		</svg>
	);
};

export default SvgFilterNone;
