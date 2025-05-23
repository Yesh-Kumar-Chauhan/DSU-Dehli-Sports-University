import React, { SVGProps } from 'react';

const SvgSubscriptions = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M4 20h16v-8H4v8zm6-7.27L16 16l-6 3.26v-6.53z' opacity={0.3} />
			<path d='M4 6h16v2H4zm2-4h12v2H6zm14 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10H4v-8h16v8zm-10-7.27v6.53L16 16z' />
		</svg>
	);
};

export default SvgSubscriptions;
