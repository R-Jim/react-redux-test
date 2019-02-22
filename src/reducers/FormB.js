export const FORMB_SAVE = 'formB/SAVE';
export const FORMB_UPDATE = 'formB/UPDATE';
export const FORMB_CREATE = 'formB/CREATE';
export const FORMB_OPEN = 'formB/OPEN';
export const FORMB_CLOSE = 'formB/CLOSE';

const initialState = {
  isOpen: true,
  name: '',
  phoneNumber: '',
}

export const updateFormValue = (fieldName, value) => {
  return {
    type: FORMB_UPDATE,
    // es5
    payload: {
      fieldName: fieldName,
      value: value,
    }
    // es6
    // payload: {
    //   fieldName,
    //   value,
    // }
  }
}

const formBReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORMB_OPEN: {
      // es5
      const newState = Object.assign({}, state);
      newState.isOpen = true;
      return newState;
    }
    case FORMB_CLOSE: {
      // spead operator
      return {
        ...state,
        isOpen: false,
      }
    }
    default: return state;
  }
}

export default formBReducer;
