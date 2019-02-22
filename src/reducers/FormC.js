export const FORMC_OPEN = 'formC/OPEN';
export const FORMC_CLOSE = 'formC/CLOSE';
export const FORMC_UPDATE = 'formC/UPDATE';

const initialState = {
    isOpen: false,
    address: '',
    postcode: '',
}

export const toggleForm = (isOpen) => {
    return {
        type: (isOpen) ? FORMC_OPEN : FORMC_CLOSE,
    }
}

export const updateFormValue = (fieldName, value) => {
    return {
        type: FORMC_UPDATE,
        payload: {
            fieldName,
            value
        }
    }
}

const formCReducer = (state = initialState, action) => {
    switch (action.type) {
        case FORMC_OPEN: {
            return { ...state, isOpen: true };
        }
        case FORMC_CLOSE: {
            return { ...state, isOpen: false };
        }
        case FORMC_UPDATE: {
            const payload = action.payload;
            const fieldName = payload.fieldName;
            const value = payload.value;
            return { ...state, [fieldName]: value }
        }
        default: return state;
    }
}

export default formCReducer;