import React, { FC } from 'react';
import PropTypes from 'prop-types';
import logo from '../public/frontend/images/logo.png'

interface ILogoProps {
	width?: number;
	height?: number;
}
const Logo: FC<ILogoProps> = () => {
	return (
		<img src={logo} width='60px' height='60px' alt=""/>
	);
};
Logo.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};
Logo.defaultProps = {
	width: 2155,
	height: 854,
};

export default Logo;
