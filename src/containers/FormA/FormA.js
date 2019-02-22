import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormA from '../../components/FormA';
import { updateFormValue } from '../../reducers/FormA';

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
    updateFormValue: function(fieldName, value) {
      dispatch(updateFormValue(fieldName, value));
      // dispatch({
      //   type: FORMA_UPDATE,
      //   // es5
      //   payload: {
      //     fieldName: fieldName,
      //     value: value,
      //   }
      // })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormA);
