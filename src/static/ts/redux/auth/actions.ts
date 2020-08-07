import * as types from './types';

export const changeFieldInStore = (field, value) => ({
  type: types.CHANGE_FIELD_IN_STORE,
  field,
  value,
});
