import React, { SVGProps } from 'react';

const SvgPhoneAndroid = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 4h10v14H7z' opacity={0.3} />
			<path d='M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3-3H7V4h10v14z' />
		</svg>
	);
};

export default SvgPhoneAndroid;
