import React, { SVGProps } from 'react';

const SvgLiquor = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				opacity={0.3}
				d='M16 4h1v1h-1zM6 15c.55 0 1-.45 1-1v-1H5v1c0 .55.45 1 1 1zM13 14h7v2h-7z'
			/>
			<path d='M3 14c0 1.3.84 2.4 2 2.82V20H3v2h6v-2H7v-3.18C8.16 16.4 9 15.3 9 14V6H3v8zm2-6h2v3H5V8zm0 5h2v1c0 .55-.45 1-1 1s-1-.45-1-1v-1zM20.64 8.54l-.96-.32a1 1 0 01-.68-.95V3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4.28a1 1 0 01-.68.95l-.96.32c-.81.28-1.36 1.04-1.36 1.9V20c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-9.56c0-.86-.55-1.62-1.36-1.9zM16 4h1v1h-1V4zm4 16h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-1.56l.95-.32C15.18 9.72 16 8.57 16 7.28V7h1v.28a3 3 0 002.05 2.85l.95.31V12z' />
		</svg>
	);
};

export default SvgLiquor;
