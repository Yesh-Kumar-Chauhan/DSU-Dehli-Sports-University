import React, { SVGProps } from 'react';

const SvgModelTraining = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M15.5 13.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5zm-2.5 6h-2V21h2v-1.5zm6-6.5c0 1.68-.59 3.21-1.58 4.42l1.42 1.42a8.978 8.978 0 00-1-12.68l-1.42 1.42A6.993 6.993 0 0119 13zm-3-8l-4-4v3a9 9 0 00-9 9c0 2.23.82 4.27 2.16 5.84l1.42-1.42A6.938 6.938 0 015 13c0-3.86 3.14-7 7-7v3l4-4z' />
		</svg>
	);
};

export default SvgModelTraining;
