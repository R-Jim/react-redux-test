import React from 'react';
class FormA extends React.Component {

    handleNameInutChanged = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('name', value);
    }

    handlePhoneInutChanged = (e) => {
        const updateFormValue = this.props.updateFormValue;
        const value = e.target.value;
        updateFormValue('phoneNumber', value);
    }

    handleFinishForm = (name, phone) => {
        const finishForm = this.props.finishForm;
        finishForm({ name, phone });
    }

    render() {
        const isOpen = this.props.isOpen;
        const name = this.props.name;
        const phoneNumber = this.props.phoneNumber;

        if (!isOpen) return null;
        return (
            <form>
                <h1>Form A: Verify user</h1>
                <div>Name: </div>
                <input
                    type="text"
                    value={name}
                    onChange={this.handleNameInutChanged}
                    required
                />
                <div>Phone: </div>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={this.handlePhoneInutChanged}
                />
                <br />
                <button type="button">Reset</button>
                <button type="submit" onClick={() => this.handleFinishForm({ name }, { phoneNumber })}>Finish</button>
            </form>
        );
    }
}

export default FormA;
