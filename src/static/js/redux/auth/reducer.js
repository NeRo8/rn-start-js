import * as types from './types';

const initState = {
  user: {},
  loading: true,
  success: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_FIELD_IN_STORE: {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
