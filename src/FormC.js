import React from 'react';

class FormC extends React.Component {
    render() {
        return (
            <form style={{ display: (this.props.formIsOpen) ? 'block' : 'none' }}>
                <h1>Form C: Confirm delivery</h1>
                Address: <input type="text"></input><br />
                Postcode: <input type="text"></input><br />
                <button type="button">Back</button>
                <button type="button">Reset</button>
                <button type="button" onClick={this.props.finishForm}>Finish</button>
            </form>
        );
    }
}

export default FormC;
