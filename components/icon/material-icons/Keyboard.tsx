import React, { SVGProps } from 'react';

const SvgKeyboard = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0zm0 0h24v24H0V0z' fill='none' />
			<path
				d='M4 17h16V7H4v10zm13-9h2v2h-2V8zm0 3h2v2h-2v-2zm-3-3h2v2h-2V8zm0 3h2v2h-2v-2zm-3-3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm0 3h8v2H8v-2zM5 8h2v2H5V8zm0 3h2v2H5v-2z'
				opacity={0.3}
			/>
			<path d='M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H4V7h16v10zm-9-9h2v2h-2zm0 3h2v2h-2zM8 8h2v2H8zm0 3h2v2H8zm-3 0h2v2H5zm0-3h2v2H5zm3 6h8v2H8zm6-3h2v2h-2zm0-3h2v2h-2zm3 3h2v2h-2zm0-3h2v2h-2z' />
		</svg>
	);
};

export default SvgKeyboard;
