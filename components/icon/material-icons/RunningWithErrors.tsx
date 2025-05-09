import React, { SVGProps } from 'react';

const SvgRunningWithErrors = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M22 10v8h-2v-8h2zm-2 10v2h2v-2h-2zm-2-2.71A7.99 7.99 0 0112 20c-4.41 0-8-3.59-8-8s3.59-8 8-8v9l7.55-7.55A9.965 9.965 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.25 0 4.33-.74 6-2v-2.71z' />
		</svg>
	);
};

export default SvgRunningWithErrors;
