import React, { SVGProps } from 'react';

const SvgPauseCircle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm-1 12H9V8h2v8zm4 0h-2V8h2v8z'
				opacity={0.3}
			/>
			<path d='M13 8h2v8h-2zM9 8h2v8H9z' />
			<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
		</svg>
	);
};

export default SvgPauseCircle;
