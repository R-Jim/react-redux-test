import React from 'react';
import Modal from 'react-modal';

class FormB extends React.Component {

    handleCardNoInput = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('cardNo', value);
    }

    handleCidInput = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('cid', value);
    }


    render() {
        const isOpen = this.props.isOpen;
        const cardNo = this.props.cardNo;
        const cid = this.props.cid;
        if (!isOpen)
            return null;
        return (
            <Modal
                isOpen={isOpen}
                onRequestClose={this.props.returnToFormA}
                contentLabel="Form B"
            >
                <form>
                    <h1>Form B: Verify payment</h1>
                    <div>Card No.: </div>
                    <input type="text"
                        value={cardNo}
                        onChange={this.handleCardNoInput}
                    /><br />
                    <div>CID: </div>
                    <input type="text"
                        value={cid}
                        onChange={this.handleCidInput}
                    /><br />
                    <button type="button" onClick={this.props.returnToFormA}>Back</button>
                    <button type="button">Reset</button>
                    <button type="button" onClick={this.props.finishForm}>Finish</button>
                </form>
            </Modal>
        );
    }
}

Modal.setAppElement('body');

export default FormB;