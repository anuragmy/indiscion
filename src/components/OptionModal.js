import Modal from 'react-modal';

const OptionModal = (props) => {
	console.log(props.selectedOption);
	return (
		<div>
			<Modal
				isOpen={!!props.selectedOption}
				onRequestClose={props.handleClearSelectionOption}
				ariaHideApp={false}
				contentLabel="Select Options"
			>
				<h3>Select Options</h3>
				{props.selectedOption && <p>{props.selectedOption}</p>}
				<button onClick={props.handleClearSelectionOption}>Okay</button>
			</Modal>
		</div>
	);
};

export default OptionModal;
