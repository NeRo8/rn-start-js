import * as types from './types';

export const changeFieldInStore = (field, value) => ({
  type: types.CHANGE_FIELD_IN_STORE,
  field,
  value,
});

export const setMessage = (typeMessage, message, active = true) => ({
  type: types.SET_MESSAGE,
  typeMessage,
  message,
  active,
});
