import React, { SVGProps } from 'react';

const SvgSportsMma = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M15 5H7v5.6c0 .14.64 3.4.64 3.4h8.72s.64-3.26.64-3.4V10h-2V5zm-1 5H8V7h6v3z'
				opacity={0.3}
			/>
			<path d='M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7v3zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8H17c.55 0 1.09-.44 1.2-.98l.77-3.83c.02-.12.03-.25.03-.38V8c0-.55-.45-1-1-1zm-1 3.6c0 .13-.64 3.4-.64 3.4H7.64S7 10.74 7 10.6V5h8v5h2v.6z' />
			<path d='M8 7h6v3H8z' />
		</svg>
	);
};

export default SvgSportsMma;
