import React, { SVGProps } from 'react';

const SvgPlaylistAddCheck = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M3 10h11v2H3zM3 6h11v2H3zM3 14h7v2H3zM20.59 11.93l-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z' />
		</svg>
	);
};

export default SvgPlaylistAddCheck;
