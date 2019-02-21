import React from 'react';
// import Redux from 'redux';

// function formA(state, action) {
//     if (typeof state === 'undefined') {
//         return 0;
//     }
//     // switch (action.type) {
//     //     case 'OPEN': return state = { open: true };
//     //     case 'CLOSE': return state = { open: false };
//     //     case 'SAVE': return state = { Object.asignas };
//     //     default: return state;
//     // }
// }

// var storeA = Redux.createStore();

class FormA extends React.Component {
    constructor() {
        super();
        this.state = {
            form: {
                name: '',
                phone: ''
            }
        }
        this.finishForm = this.finishForm.bind(this);
        this.handlerInputName = this.handlerInputName.bind(this);
        this.handlerInputPhone = this.handlerInputPhone.bind(this);
    }

    handlerInputName(event) {
        const form = this.state.form;
        form.name = event.target.value;
        this.setState({ form: form });
    }

    handlerInputPhone(event) {
        const form = this.state.form;
        form.phone = event.target.value;
        this.setState({ form: form });
    }

    finishForm() {
        this.props.finishForm(this.state.form);
    }

    render() {
        return (
            <form>
                <h1>Form A: Verify user</h1>
                Name: <input type="text" onChange={this.handlerInputName}></input><br />
                Phone: <input type="text" onChange={this.handlerInputPhone}></input><br />
                <button type="button">Reset</button>
                <button type="button" onClick={this.finishForm}>Finish</button>
            </form>
        );
    }
}

export default FormA;