export const RECEIPT_OPEN = 'receipt/OPEN'
export const RECEIPT_CLOSE = 'receipt/CLOSE'
export const RECEIPT_CREATE = 'receipt/CREATE'

const initialState = {
    isOpen: false,
    formData: {
        name: '',
        phoneNumber: '',
        cardNo: '',
        cid: '',
        address: '',
        postcode: '',
    }
}

export const toggleReceipt = (isOpen) => {
    return {
        type: (isOpen) ? RECEIPT_OPEN : RECEIPT_CLOSE
    }
}

export const createReceipt = (formA, formB, formC) => {
    return {
        type: RECEIPT_CREATE,
        payload: {
            name: formA.name,
            phoneNumber: formA.phoneNumber,
            cardNo: formB.cardNo,
            cid: formB.cid,
            address: formC.address,
            postcode: formC.postcode,
        }
    }
}

const receiptReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIPT_OPEN: {
            return { ...state, isOpen: true };
        }
        case RECEIPT_CLOSE: {
            return { ...state, isOpen: false };
        }
        case RECEIPT_CREATE: {
            const formData = action.payload;
            return { ...state, formData };
        }
        default: return state;
    }
}

export default receiptReducer;