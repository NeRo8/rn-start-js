import * as types from './types';

const initState = {
  active: false,
  message: '',
  type: 'error',
  loading: false,
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_FIELD_IN_STORE: {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    case types.SET_MESSAGE: {
      return {
        active: action.active,
        message: action.message,
        typeMessage: action.typeMessage,
      };
    }
    default:
      return state;
  }
};

export default errorReducer;
