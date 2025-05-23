import React, { SVGProps } from 'react';

const SvgRamenDining = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M8.73 18.39l1.27.5V20h4v-1.11l1.27-.5c2.16-.85 3.74-2.47 4.4-4.39H4.34c.65 1.92 2.24 3.54 4.39 4.39z'
				opacity={0.3}
			/>
			<path d='M22 3.51V2L4 3.99V12H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10.5V8H22V6.5H10.5V4.78L22 3.51zM8 5.06l1-.11V6.5H8V5.06zM8 8h1v4H8V8zM5.5 5.34l1-.11V6.5h-1V5.34zM5.5 8h1v4h-1V8zm14.16 6c-.66 1.92-2.24 3.54-4.4 4.39l-1.26.5V20h-4v-1.11l-1.27-.5c-2.16-.85-3.74-2.47-4.4-4.39h15.33z' />
		</svg>
	);
};

export default SvgRamenDining;
