import React, { SVGProps } from 'react';

const SvgFlashlightOn = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M8 7.39l2 3V20h4v-9.6l2-3.01V7H8v.39zm4 5.11c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM8 4h8v1H8z'
				opacity={0.3}
			/>
			<path d='M6 2v6l2 3v11h8V11l2-3V2H6zm10 5.39l-2 3.01V20h-4v-9.61l-2-3V7h8v.39zM16 5H8V4h8v1z' />
			<circle cx={12} cy={14} r={1.5} />
		</svg>
	);
};

export default SvgFlashlightOn;
