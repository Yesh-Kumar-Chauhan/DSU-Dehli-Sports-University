import React, { SVGProps } from 'react';

const SvgGavel = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M1 21h12v2H1v-2zM5.24 8.07l2.83-2.83 14.14 14.14-2.83 2.83L5.24 8.07zM12.32 1l5.66 5.66-2.83 2.83-5.66-5.66L12.32 1zM3.83 9.48l5.66 5.66-2.83 2.83L1 12.31l2.83-2.83z' />
		</svg>
	);
};

export default SvgGavel;
