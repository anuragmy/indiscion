import React from 'react';

const Actions = (props) => {
	return (
		<div>
			<button disabled={!props.hasOptions} type="button" className="big-button" onClick={props.handlePick}>
				What should I do?
			</button>
		</div>
	);
};
export default Actions;
