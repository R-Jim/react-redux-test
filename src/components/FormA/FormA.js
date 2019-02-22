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
                />
                <div>Phone: </div>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={this.handlePhoneInutChanged}
                />
                <button type="button">Reset</button>
                <button type="button">Finish</button>
            </form>
        );
    }
}

export default FormA;
