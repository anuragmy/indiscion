const Header = (props) => {
	return (
		<div>
			<h1 className="text-primary">{props.title}</h1>
			{props.subTitle && <h2 className="text-default">{props.subTitle}</h2>}
		</div>
	);
};

Header.defaultProps = {
	title: 'Indiscion App!',
	subTitle: 'Put your life in the hands of the computer'
};

export default Header;
