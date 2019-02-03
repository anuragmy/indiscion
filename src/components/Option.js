import React from 'react';

const Option = (props) => {
	//console.log(props);
	const options = props.optionText;
	console.log('etsting');
	return (
		<div className="option">
			<p className="option__text">
				{props.index}. {options}
			</p>
			<button
				className="button button--link"
				onClick={(e) => {
					props.handleDeleteOption(options);
				}}
			>
				Remove
			</button>
		</div>
	);
};

export default Option;
