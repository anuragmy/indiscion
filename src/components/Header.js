import React from 'react';
const Header = (props) => {
	return (
		<div className="header">
			<div className="container">
				<h1 className="header__title">{props.title}</h1>
				{props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2>}
			</div>
		</div>
	);
};

Header.defaultProps = {
	title: 'Indiscion App',
	subTitle: 'Put your life in the hands of the computer'
};

export default Header;
