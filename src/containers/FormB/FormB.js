import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FormB from '../../components/FormB';
import * as BReducer from '../../reducers/FormB';
import { toggleForm as AToggle } from '../../reducers/FormA';
import { toggleForm as CToggle } from '../../reducers/FormC';

// hàm này giúp react-redux lấy ra những giá trị trong reducer
const mapStateToProps = (store) => {
    const formB = store.formB; // const { formA } = store;
    return {
        isOpen: formB.isOpen,
        cardNo: formB.cardNo,
        cid: formB.cid,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFormValue: function (fieldName, value) {
            dispatch(BReducer.updateFormValue(fieldName, value));
        },
        toggleForm: function (isOpen) {
            dispatch(BReducer.toggleForm(isOpen));
        },
        returnToFormA: function () {
            dispatch(BReducer.toggleForm(false));
            dispatch(AToggle(true));
        },
        finishForm: function (form) {
            dispatch(BReducer.toggleForm(false));
            dispatch(CToggle(true));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormB);
