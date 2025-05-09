import React, { SVGProps } from 'react';

const SvgStream = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<circle cx={20} cy={12} r={2} />
			<circle cx={4} cy={12} r={2} />
			<circle cx={12} cy={20} r={2} />
			<path d='M13.943 8.619l4.404-4.392 1.413 1.416-4.405 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zM15.41 13.94L14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zM8.59 13.95l-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z' />
			<circle cx={12} cy={4} r={2} />
		</svg>
	);
};

export default SvgStream;
