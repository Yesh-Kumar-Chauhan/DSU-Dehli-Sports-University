import React, { SVGProps } from 'react';

const SvgFlashlightOff = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				opacity={0.3}
				d='M16 7H9.83L14 11.17v-.77l2-3.01zM10 12.83V20h4v-3.17zM16 5V4H6.83l1 1z'
			/>
			<g>
				<path d='M2.81 2.81L1.39 4.22 8 10.83V22h8v-3.17l3.78 3.78 1.41-1.41L2.81 2.81zM14 20h-4v-7.17l4 4V20zM16 4v1H7.83l2 2H16v.39l-2 3.01v.77l2 2V11l2-3V2H6v1.17l.83.83z' />
			</g>
		</svg>
	);
};

export default SvgFlashlightOff;
