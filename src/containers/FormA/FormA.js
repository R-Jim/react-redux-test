import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormA from '../../components/FormA';
import * as AReducer from '../../reducers/FormA';
import { toggleForm } from '../../reducers/FormB';

// hàm này giúp react-redux lấy ra những giá trị trong reducer
const mapStateToProps = (store) => {
  const formA = store.formA; // const { formA } = store;
  return {
    isOpen: formA.isOpen,
    name: formA.name,
    phoneNumber: formA.phoneNumber,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // updateFormValue: bindActionCreators(updateFormValue, dispatch),
    // tương đương với ở trên
    updateFormValue: function (fieldName, value) {
      dispatch(AReducer.updateFormValue(fieldName, value));
      // dispatch({
      //   type: FORMA_UPDATE,
      //   // es5
      //   payload: {
      //     fieldName: fieldName,
      //     value: value,
      //   }
      // })
    },
    finishForm: function (state) {
      dispatch(AReducer.finishForm(state));
      dispatch(AReducer.toggleForm(false));
      dispatch(toggleForm(true));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormA);
