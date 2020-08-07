import EStyleSheet from 'react-native-extended-stylesheet';
import * as types from './types';

import dark from './mode/dark';
import light from './mode/light';

const themes = {
  dark: dark,
  light: light,
};

export const changeThemeMode = (name) => {
  const theme = themes[name];

  EStyleSheet.build(theme);

  return {
    type: types.CHANGE_THEME,
    theme,
  };
};
