import React, { SVGProps } from 'react';

const SvgVolumeMute = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9 13h2.83L14 15.17V8.83L11.83 11H9z' opacity={0.3} />
			<path d='M7 9v6h4l5 5V4l-5 5H7zm7-.17v6.34L11.83 13H9v-2h2.83L14 8.83z' />
		</svg>
	);
};

export default SvgVolumeMute;
