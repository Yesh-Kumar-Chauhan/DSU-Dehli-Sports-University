import React, { SVGProps } from 'react';

const SvgTty = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M4.13 5c.17 1.37.53 2.71 1.05 3.99l1.65-1.65L6.36 5H4.13zm11.53 11.17l-1.65 1.65c1.28.52 2.63.87 3.99 1.05v-2.23l-2.34-.47z'
				opacity={0.3}
			/>
			<path d='M19.2 14.84l-3.67-.73a.99.99 0 00-.9.27L12.1 16.9c-2.5-1.43-4.57-3.5-6-6l2.52-2.52c.24-.24.34-.58.28-.9L8.16 3.8c-.09-.46-.5-.8-.98-.8H3.03c-.56 0-1.03.47-1 1.03.17 2.89 1.02 5.6 2.4 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.23 7.97 2.4.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98zM4.13 5h2.23l.47 2.34-1.65 1.65A15.77 15.77 0 014.13 5zM18 18.87a15.77 15.77 0 01-3.99-1.05l1.65-1.65 2.34.47v2.23zM14 4h2v2h-2V4zm-1 3h2v2h-2V7zm-2-3h2v2h-2V4zm7 5h-2V7h2v2zm1-3h-2V4h2v2zm2 3h-2V7h2v2zm1-3h-2V4h2v2zm-8 4h2v2h-2v-2zm-3 0h2v2h-2v-2zm8 2h-2v-2h2v2zm3 0h-2v-2h2v2z' />
		</svg>
	);
};

export default SvgTty;
