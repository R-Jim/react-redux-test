
import React from 'react';

class FormC extends React.Component {
    handleAddressInput = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('address', value);
    }

    handlePostcodeInput = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('postcode', value);
    }

    render() {
        const isOpen = this.props.isOpen;
        const address = this.props.address;
        const postcode = this.props.postcode;
        if (!isOpen)
            return null;
        return (
            <form>
                <h1>Form C: Confirm delivery</h1>
                <div>Address: </div>
                <input type="text"
                    value={address}
                    onChange={this.handleAddressInput}
                /><br />
                <div>Postcode: </div>
                <input type="text"
                    value={postcode}
                    onChange={this.handlePostcodeInput}
                /><br />
                <button type="button" onClick={this.props.returnToFormB}>Back</button>
                <button type="button">Reset</button>
                <button type="button" onClick={this.props.finishForm}>Finish</button>
            </form>
        );
    }
}

export default FormC;
