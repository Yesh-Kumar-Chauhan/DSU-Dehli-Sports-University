import React, { SVGProps } from 'react';

const SvgLibraryAddCheck = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path
				d='M8 16h12V4H8v12zm2.4-6.91l2.07 2.08L17.6 6 19 7.41 12.47 14 9 10.5l1.4-1.41z'
				opacity={0.3}
			/>
			<path d='M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7.53-2L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 20h14v2H4c-1.1 0-2-.9-2-2V6h2v14z' />
			<path d='M0 0h24v24H0V0z' fill='none' />
		</svg>
	);
};

export default SvgLibraryAddCheck;
