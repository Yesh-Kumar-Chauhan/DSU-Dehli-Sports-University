import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../components/icon/Icon';
import Logo from '../../components/Logo';
import Link from 'next/link';

interface IBrandProps {
	asideStatus: boolean;
	setAsideStatus(...args: unknown[]): unknown;
}
const Brand: FC<IBrandProps> = ({ asideStatus   , setAsideStatus }) => {
	return (
		<div className='brand'>
			<div className='brand-logo'>
				<h1 className='brand-title admin_logo'> 
					<Link href='/admin/dashboard' aria-label='Logo'>
						<Logo height={32} />
					</Link>
				</h1>
			</div>
			<button
				type='button'
				className='btn brand-aside-toggle'
				aria-label='Toggle Aside'
				onClick={() => setAsideStatus(!asideStatus)}
				>
				<Icon icon='FirstPage' className='brand-aside-toggle-close' />
				<Icon icon='LastPage' className='brand-aside-toggle-open' />
			</button>
		</div>
	);
};
Brand.propTypes = {
	asideStatus: PropTypes.bool.isRequired,
	setAsideStatus: PropTypes.func.isRequired,
};

export default Brand;
