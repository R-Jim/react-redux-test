import React from 'react';
import Modal from 'react-modal';

class FormB extends React.Component {

    render() {
        return (
            <Modal
                isOpen={this.props.state.isOpen}
                onRequestClose={this.props.closeForm}
                contentLabel="Form B"
            >
                <form>
                    <h1>Form B: Verify payment</h1>
                    Card No.: <input type="text"></input><br />
                    CID: <input type="text"></input><br />
                    <button type="button">Back</button>
                    <button type="button">Reset</button>
                    <button type="button" onClick={this.props.finishForm}>Finish</button>
                </form>
            </Modal>
        );
    }
}

Modal.setAppElement('body');

export default FormB;
