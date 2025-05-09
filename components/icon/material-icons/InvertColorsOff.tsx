import React, { SVGProps } from 'react';

const SvgInvertColorsOff = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M12 14.83V19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28L12 14.83zm0-10.02v4.37l-2.2-2.2L12 4.81'
				opacity={0.3}
			/>
			<path d='M21.19 21.19L2.81 2.81 1.39 4.22l4.2 4.2a7.73 7.73 0 00-1.6 4.7C4 17.48 7.58 21 12 21c1.75 0 3.36-.56 4.67-1.5l3.1 3.1 1.42-1.41zM12 19c-3.31 0-6-2.63-6-5.87 0-1.19.36-2.32 1.02-3.28L12 14.83V19zM8.38 5.56L12 2l5.65 5.56C19.1 8.99 20 10.96 20 13.13c0 1.18-.27 2.29-.74 3.3L12 9.17V4.81L9.8 6.97 8.38 5.56z' />
		</svg>
	);
};

export default SvgInvertColorsOff;
