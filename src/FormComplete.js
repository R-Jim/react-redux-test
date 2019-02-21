import React from 'react';

class CompleteForm extends React.Component {
    constructor() {
        super();
        this.renderFormA = this.renderFormA.bind(this);
    }

    renderFormA() {
        return <div>Hello</div>;
    }


    render() {
        return (
            <form style={{ display: (this.props.formIsOpen) ? 'block' : 'none' }}>
                {this.renderFormA()}
            </form>
        );
    }

}

export default CompleteForm;