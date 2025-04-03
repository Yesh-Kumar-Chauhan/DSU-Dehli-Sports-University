import React, { SVGProps } from 'react';

const SvgHistoryEdu = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M11.34 9.76L9.93 8.34c-.95-.94-2.2-1.46-3.54-1.46-.63 0-1.25.12-1.82.34l1.04 1.04h2.28v2.14c.4.23.86.35 1.33.35.73 0 1.41-.28 1.92-.8l.2-.19z'
				opacity={0.3}
			/>
			<path
				d='M11 6.62l6 5.97V14h-1.41l-2.83-2.83-.2.2c-.46.46-.99.8-1.56 1.03V15h6v2c0 .55.45 1 1 1s1-.45 1-1V6h-8v.62z'
				opacity={0.3}
			/>
			<path d='M9 4v1.38c-.83-.33-1.72-.5-2.61-.5-1.79 0-3.58.68-4.95 2.05l3.33 3.33h1.11v1.11c.86.86 1.98 1.31 3.11 1.36V15H6v3c0 1.1.9 2 2 2h10c1.66 0 3-1.34 3-3V4H9zm-1.11 6.41V8.26H5.61L4.57 7.22a5.07 5.07 0 011.82-.34c1.34 0 2.59.52 3.54 1.46l1.41 1.41-.2.2a2.7 2.7 0 01-1.92.8c-.47 0-.93-.12-1.33-.34zM19 17c0 .55-.45 1-1 1s-1-.45-1-1v-2h-6v-2.59c.57-.23 1.1-.57 1.56-1.03l.2-.2L15.59 14H17v-1.41l-6-5.97V6h8v11z' />
		</svg>
	);
};

export default SvgHistoryEdu;
