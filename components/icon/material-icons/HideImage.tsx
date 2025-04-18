import React, { SVGProps } from 'react';

const SvgHideImage = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				opacity={0.3}
				d='M16.17 19l-2-2H6l3-4 2.25 3 .82-1.1L5 7.83V19zM7.83 5L19 16.17V5z'
			/>
			<path d='M19 5v11.17l2 2V5c0-1.1-.9-2-2-2H5.83l2 2H19zM2.81 2.81L1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41L2.81 2.81zM5 19V7.83l7.07 7.07-.82 1.1L9 13l-3 4h8.17l2 2H5z' />
		</svg>
	);
};

export default SvgHideImage;
