import React, { SVGProps } from 'react';

const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<circle cx={10.01} cy={17} opacity={0.3} r={2} />
			<path d='M12 3l.01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 100 8c2.22 0 3.99-1.79 3.99-4V7h4V3h-6zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' />
		</svg>
	);
};

export default SvgMusicNote;
