import React, { Component } from 'react';
import FormA from './FormA';
import FormB from './FormB';
import FormC from './FormC';
import { createStore } from 'redux';
import formBReducer from './reducer/FormB';
import ReactDOM from 'react-dom';
import CompleteForm from './FormComplete';
import './App.css';

const formB = createStore(formBReducer);

// class App extends Component {
// constructor() {
//   super();
//   this.state = {
//     modalBIsOpen: false,
//     formCIsOpen: false,
//     formCompleteIsOpen: false
//   }
//   this.openFormB = this.openFormB.bind(this);
//   this.closeFormB = this.closeFormB.bind(this);
//   this.openFormC = this.openFormC.bind(this);
//   this.closeFormC = this.closeFormC.bind(this);
//   this.finishFormA = this.finishFormA.bind(this);
//   this.finishFormB = this.finishFormB.bind(this);
// }

// openFormB() {
//   this.setState({ modalBIsOpen: true });
// }

// closeFormB() {
//   this.setState({ modalBIsOpen: false });
// }

openFormB = () => {

}

// openFormC() {
//   this.setState({ formCIsOpen: true });
// }

// closeFormC() {
//   this.setState({ formCIsOpen: false });
// }

// finishFormA(form) {
//   alert(form.name + ", " + form.phone);
//   // this.openFormB();
//   formB.dispatch({ type: 'OPEN' });
// }

// finishFormB() {
//   this.closeFormB();
//   this.openFormC();
// }


//   render() {
//     return (
//       <div id='container'>
//         <ul>
//           <li>Form A</li>
//           <li onClick={this.openFormB}>> Form B</li>
//           <li onClick={this.openFormC}>> Form C</li>
//         </ul><br />
//         <FormA finishForm={this.finishFormA}></FormA>
//         <FormB state={formB.getState()} closeFrom={() => formB.dispatch({ type: 'CLOSE' })} finishForm={this.finishFormB}></FormB>
//         <FormC formIsOpen={this.state.formCIsOpen}></FormC>
//         <CompleteForm formIsOpen={this.state.formCompleteIsOpen}></CompleteForm>
//       </div >
//     );
//   }
// }



const render = () => ReactDOM.render(
  <div id='container'>
    {/* <ul>
      <li>Form A</li>
      <li onClick={this.openFormB}>> Form B</li>
      <li onClick={this.openFormC}>> Form C</li>
    </ul><br /> */}
    {/* <FormA finishForm={this.finishFormA}></FormA> */}
    <button onClick={() => formB.dispatch({ type: 'OPEN' })}>X</button>
    <FormB state={formB.getState()} closeForm={() => formB.dispatch({ type: 'CLOSE' })}></FormB>
    {/* <FormC formIsOpen={this.state.formCIsOpen}></FormC>
    <CompleteForm formIsOpen={this.state.formCompleteIsOpen}></CompleteForm> */}
  </div >,
  document.getElementById('root')
)


formB.subscribe(render);

export default render;
