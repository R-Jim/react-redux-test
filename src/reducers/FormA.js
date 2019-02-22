import { FORMB_OPEN } from './FormB';

export const FORMA_SAVE = 'formA/SAVE';
export const FORMA_UPDATE = 'formA/UPDATE';
export const FORMA_CREATE = 'formA/CREATE';
export const FORMA_FINISH = 'formA/FINISH';
export const FORMA_OPEN = 'formA/OPEN';
export const FORMA_CLOSE = 'formA/CLOSE';

const initialState = {
  isOpen: true,
  name: '',
  phoneNumber: '',
}

export const updateFormValue = (fieldName, value) => {
  return {
    type: FORMA_UPDATE,
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

export const toggleForm = (isOpen) => {
  return {
    type: (isOpen) ? FORMA_OPEN : FORMA_CLOSE
  }
}

export const finishForm = (form) => {
  return {
    type: FORMA_FINISH,
    payload: {
      form,
    }
  }
}

const formAReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORMA_OPEN: {
      // es5
      const newState = Object.assign({}, state);
      newState.isOpen = true;
      return newState;
    }
    case FORMA_CLOSE: {
      // spead operator
      return {
        ...state,
        isOpen: false,
      }
    }
    case FORMA_UPDATE: {
      const payload = action.payload;
      const fieldName = payload.fieldName;
      const value = payload.value;
      return {
        ...state,
        [fieldName]: value, // [fieldName] -> lấy value của fieldName làm key
        // vd fieldName = 'a'
        // {
        //   [fieldName]: 123
        // }
        // sẽ được
        // {
        //   a: 123
        // }
      }
    }
    case FORMA_FINISH: {
      return {
        ...state,
        // isOpen: false,
      }
    }
    default:
      return state;
  }
}

export default formAReducer;
