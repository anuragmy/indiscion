const Actions = (props) => {
	return (
		<div>
			<input disabled={!props.hasOptions} type="button" onClick={props.handlePick} value="What should I do?" />;
		</div>
	);
};
export default Actions;
