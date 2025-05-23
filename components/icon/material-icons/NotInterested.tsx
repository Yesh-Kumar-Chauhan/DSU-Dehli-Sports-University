import React, { SVGProps } from 'react';

const SvgNotInterested = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm0-18c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9L7.1 5.69A7.902 7.902 0 0112 4zM5.69 7.1L16.9 18.31A7.902 7.902 0 0112 20c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9z' />
		</svg>
	);
};

export default SvgNotInterested;
