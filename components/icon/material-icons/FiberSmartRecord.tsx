import React, { SVGProps } from 'react';

const SvgFiberSmartRecord = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M9 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z' opacity={0.3} />
			<path d='M9 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zM9 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm8-1.74v2.09a5.99 5.99 0 010 11.3v2.09c3.45-.89 6-4.01 6-7.74 0-3.73-2.55-6.85-6-7.74z' />
		</svg>
	);
};

export default SvgFiberSmartRecord;
