import React, { SVGProps } from 'react';

const SvgStyle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M15.22 4.75L7.87 7.79l4.96 11.96 7.35-3.05-4.96-11.95zM11 10c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z'
				opacity={0.3}
			/>
			<path d='M3.87 11.18l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61l1.34.56v-9.03zm18.16 4.77L17.07 3.98a2.013 2.013 0 00-1.81-1.23c-.26 0-.53.04-.79.15L7.1 5.95a1.999 1.999 0 00-1.08 2.6l4.96 11.97a1.998 1.998 0 002.6 1.08l7.36-3.05a1.994 1.994 0 001.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95-7.35 3.05z' />
			<circle cx={11} cy={9} r={1} />
			<path d='M9.33 21.75l-3.45-8.34v6.34c0 1.1.9 2 2 2h1.45z' />
		</svg>
	);
};

export default SvgStyle;
