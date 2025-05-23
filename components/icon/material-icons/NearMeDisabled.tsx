import React, { SVGProps } from 'react';

const SvgNearMeDisabled = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M16.1 10.44l1.5-4.05-4.05 1.5 2.55 2.55zm-1.53 4.13L9.43 9.43l-2.71 1.01 4.89 1.95 1.95 4.89 1.01-2.71z'
				opacity={0.3}
			/>
			<path d='M12 6.34L21 3l-3.34 9-1.56-1.56 1.5-4.05-4.05 1.5L12 6.34zm9.19 14.85l-5.07-5.07L14.31 21H12.9l-2.83-7.07L3 11.1V9.69l4.88-1.81-5.07-5.07L4.22 1.4 22.6 19.78l-1.41 1.41zm-6.62-6.62L9.43 9.43l-2.71 1.01 4.89 1.95 1.95 4.89 1.01-2.71z' />
		</svg>
	);
};

export default SvgNearMeDisabled;
