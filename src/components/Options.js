import Option from './Option';
import React from 'react';

const Options = (props) => {
	return (
		<div>
			<div className="widget-header">
				<h3>Your Option</h3>
				<button onClick={props.handleDeleteOptions} className="button--link" disabled={!props.options.length}>
					Remove All
				</button>
			</div>

			{props.options.length === 0 && <p className="widget__message">Please add items to get started!</p>}
			{props.options.map((option, index) => (
				<Option
					key={option}
					optionText={option}
					index={index + 1}
					handleDeleteOption={props.handleDeleteOption}
				/>
			))}
		</div>
	);
};

export default Options;
