import React, { SVGProps } from 'react';

const SvgTask = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M13 9V4H6v16h12V9h-5zm-2.06 9L7.4 14.46l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41L10.94 18z'
				opacity={0.3}
			/>
			<path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zm-9.18-6.95L7.4 14.46 10.94 18l5.66-5.66-1.41-1.41-4.24 4.24-2.13-2.12z' />
		</svg>
	);
};

export default SvgTask;
