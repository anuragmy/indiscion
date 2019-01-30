import Option from './Option';
const Options = (props) => {
	return (
		<div>
			{props.options.length === 0 && <p>Please add items to get started!</p>}
			<button onClick={props.handleDeleteOptions} disabled={!props.options.length}>
				Remove All
			</button>
			{props.options.map((option) => (
				<Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
			))}
		</div>
	);
};

export default Options;
