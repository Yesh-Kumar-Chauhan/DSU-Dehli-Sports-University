import React, { SVGProps } from 'react';

const SvgNaturePeople = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<circle cx={15.17} cy={9.17} opacity={0.3} r={5} />
			<circle cx={4.5} cy={9.5} r={1.5} />
			<path d='M15.17 2.17c-3.87 0-7 3.13-7 7A6.98 6.98 0 0014 16.06V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88a7 7 0 006.17-6.95c0-3.87-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z' />
		</svg>
	);
};

export default SvgNaturePeople;
