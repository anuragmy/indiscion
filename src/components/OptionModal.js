import Modal from 'react-modal';
import React from 'react';

const OptionModal = (props) => {
	console.log(props.selectedOption);
	return (
		<div>
			<Modal
				isOpen={!!props.selectedOption}
				onRequestClose={props.handleClearSelectionOption}
				ariaHideApp={false}
				contentLabel="Select Options"
				className="modal"
			>
				<h3 className="modal__title">Select Option</h3>
				{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
				<button onClick={props.handleClearSelectionOption}>Okay</button>
			</Modal>
		</div>
	);
};

export default OptionModal;
