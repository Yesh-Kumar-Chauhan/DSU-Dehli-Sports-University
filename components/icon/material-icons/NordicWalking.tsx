import React, { SVGProps } from 'react';

const SvgNordicWalking = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 23h-1.5v-9H19v9zM7.53 14H6l-2 9h1.53l2-9zm5.97-8.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6a2.145 2.145 0 00-2.65-.84L6 8.3V13h2V9.6l1.8-.7z' />
		</svg>
	);
};

export default SvgNordicWalking;
