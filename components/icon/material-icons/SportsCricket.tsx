import React, { SVGProps } from 'react';

const SvgSportsCricket = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M4.414 7.84l1.421-1.422 7.085 7.085-1.42 1.422z' />
			<circle cx={18.5} cy={5.5} opacity={0.3} r={1.5} />
			<path d='M15.04 12.79l-8.5-8.5C6.35 4.1 6.09 4 5.83 4s-.51.1-.7.29L2.29 7.13c-.39.39-.39 1.03 0 1.42l8.5 8.5c.2.2.45.29.71.29.26 0 .51-.1.71-.29l2.83-2.83c.39-.4.39-1.04 0-1.43zm-3.54 2.13L4.41 7.83l1.42-1.42 7.09 7.09-1.42 1.42zM14.341 17.756l1.414-1.414 4.243 4.243-1.414 1.414zM18.5 2C16.57 2 15 3.57 15 5.5S16.57 9 18.5 9 22 7.43 22 5.5 20.43 2 18.5 2zm0 5c-.83 0-1.5-.67-1.5-1.5S17.67 4 18.5 4s1.5.67 1.5 1.5S19.33 7 18.5 7z' />
		</svg>
	);
};

export default SvgSportsCricket;
