import React, { SVGProps } from 'react';

const SvgFormatItalic = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M6 15v3h8v-3h-2.21l3.42-8H18V4h-8v3h2.21l-3.42 8z' />
		</svg>
	);
};

export default SvgFormatItalic;
