import React, { SVGProps } from 'react';

const SvgTextFields = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0z' fill='none' />
			<path d='M12.5 12h3v7h3v-7h3V9h-9zm3-8h-13v3h5v12h3V7h5z' />
		</svg>
	);
};

export default SvgTextFields;
