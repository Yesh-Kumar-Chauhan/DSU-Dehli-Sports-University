import React, { SVGProps } from 'react';

const SvgGrass = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M12 20H2v-2h5.75A8.032 8.032 0 002 12.26c.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8zm10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93a9.82 9.82 0 01.87 4.07h8v-2h-5.75A8.061 8.061 0 0122 12.26zm-6.36-1.24a10.03 10.03 0 014.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3zm-4.22-2.17A8.527 8.527 0 006.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82a9.91 9.91 0 011.24-3.29z' />
		</svg>
	);
};

export default SvgGrass;
