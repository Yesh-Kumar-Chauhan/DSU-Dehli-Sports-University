import React, { SVGProps } from 'react';

const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M13.28 8.5l.76.58.92-.23L13 14.8V8.29l.28.21zm-4.25.36L11 14.8V8.29l-.28.21-.76.59-.93-.23z'
				opacity={0.3}
			/>
			<path d='M14.5 6.92L13 5.77V3.4c0-.26.22-.48.5-.48s.5.21.5.48V4h2v-.6C16 2.07 14.88 1 13.5 1S11 2.07 11 3.4v2.37L9.5 6.92 6 6.07l5.05 15.25c.15.45.55.68.95.68s.8-.23.95-.69L18 6.07l-3.5.85zM13.28 8.5l.76.58.92-.23L13 14.8V8.29l.28.21zm-3.32.59l.76-.58.28-.22v6.51L9.03 8.86l.93.23z' />
		</svg>
	);
};

export default SvgUmbrella;
