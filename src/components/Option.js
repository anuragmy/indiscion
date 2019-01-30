const Option = (props) => {
	//console.log(props);
	const options = props.optionText;
	return (
		<div>
			<p>{options}</p>
			<button
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
