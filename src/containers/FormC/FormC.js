import formCReducer, * as CReducer from '../../reducers/FormC';
import { connect } from 'react-redux';
import FormC from '../../components/FormC'
import { toggleForm as BToggle } from '../../reducers/FormB'
import { toggleReceipt, createReceipt } from '../../reducers/Receipt';

const mapStateToProps = (store) => {
    const formC = store.formC;
    return {
        isOpen: formC.isOpen,
        address: formC.address,
        postcode: formC.postcode,
        formA: store.formA,
        formB: store.formB,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFormValue: function (fieldName, value) {
            dispatch(CReducer.updateFormValue(fieldName, value));
        },

        toggleForm: function (isOpen) {
            dispatch(CReducer.toggleForm(isOpen));
        },

        returnToFormB: function () {
            dispatch(CReducer.toggleForm(false));
            dispatch(BToggle(true));
        },

        finishForm: function (formA, formB, formC) {
            dispatch(CReducer.toggleForm(false));
            dispatch(toggleReceipt(true));
            dispatch(createReceipt(formA, formB, formC));
        }
    }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const finishForm = dispatchProps.finishForm;
    const { formA, formB, address, postcode } = stateProps;
    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        finishForm: () => {
            finishForm(formA, formB, { address, postcode });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(FormC);