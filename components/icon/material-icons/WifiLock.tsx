import React, { SVGProps } from 'react';

const SvgWifiLock = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M21.98 11L24 8.98A16.88 16.88 0 0012 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36L12 21l3.05-3.05V15c0-.45.09-.88.23-1.29.54-1.57 2.01-2.71 3.77-2.71h2.93z' />
			<path d='M22 16v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-1 0h-2v-1c0-.55.45-1 1-1s1 .45 1 1v1z' />
		</svg>
	);
};

export default SvgWifiLock;
