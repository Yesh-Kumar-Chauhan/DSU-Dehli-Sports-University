import React, { SVGProps } from 'react';

const SvgRadio = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M20 13H4v7h16v-7zM8 18.98a2.5 2.5 0 010-5 2.5 2.5 0 010 5z' opacity={0.3} />
			<path d='M2 20a2 2 0 002 2h16a2 2 0 002-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15C2.51 6.43 2 7.17 2 8v12zM4 8h16v3h-2V9h-2v2H4V8zm0 5h16v7H4v-7z' />
			<circle cx={8} cy={16.48} r={2.5} />
		</svg>
	);
};

export default SvgRadio;
