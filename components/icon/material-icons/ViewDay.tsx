import React, { SVGProps } from 'react';

const SvgViewDay = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M4 10h15v4H4z' opacity={0.3} />
			<path d='M2 18h19v2H2zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 6H4v-4h15v4zM2 4h19v2H2z' />
		</svg>
	);
};

export default SvgViewDay;
