import { connect } from 'react-redux';
import * as RReducer from '../../reducers/Receipt';
import Receipt from '../../components/Receipt';

const mapStateToProps = (store) => {
    const receipt = store.receipt;
    return {
        isOpen: receipt.isOpen,
        formData: receipt.formData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleReceipt: function (isOpen) {
            alert(isOpen);
            dispatch(RReducer.toggleReceipt(isOpen));
        },
        createReceipt: function (formA, formB, formC) {
            dispatch(RReducer.createReceipt(formA, formB, formC));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Receipt);
