import { writeFileSync, mkdirSync, existsSync } from "fs";
import { table } from "console";

//AUTH GENERATORS

export const authActionFile = `
import * as types from './types';

export const changeFieldInStore = (field, value) => ({
  type: types.CHANGE_FIELD_IN_STORE,
  field,
  value,
});
`;

export const authReducerFile = `
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
`;

export const authTypesFile = `const CHANGE_FIELD_IN_STORE = 'CHANGE_FIELD_IN_STORE_AUTH';

export { CHANGE_FIELD_IN_STORE };
`;

export function createIndexFile(name) {
  return `
    import reducer from './reducer';

import * as ${name}Types from './types';
import * as ${name}Actions from './actions';

export { ${name}Actions, ${name}Types };

export default reducer;
`;
}

//ERROR GENERATORS
export const errorActionFile = `
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

`;

export const errorReducerFile = `
import * as types from "./types";

const initState = {
  active: false,
  message: "",
  type: "error",
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
`;

export const errorTypesFile = `
const CHANGE_FIELD_IN_STORE = 'CHANGE_FIELD_IN_STORE_ERROR';
const SET_MESSAGE = 'SET_MESSAGE_ERROR';

export { CHANGE_FIELD_IN_STORE, SET_MESSAGE };

`;

//THEMES GENERATORS

export const themesActionFile = `import EStyleSheet from 'react-native-extended-stylesheet';
import * as types from './types';

import dark from './mode/dark';
import light from './mode/light';

const themes = {
  dark: dark,
  light: light,
};

export const changeThemeMode = name => {
  const theme = themes[name];

  EStyleSheet.build(theme);

  return {
    type: types.CHANGE_THEME,
    theme,
  };
};
`;

export const themesReducerFile = `import * as types from './types';
import light from './mode/light';

const initState = {
  ...light,
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_THEME: {
      return {
        ...action.theme,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
`;

export const themesTypesFile = `const CHANGE_THEME = 'CHANGE_THEME_MODE';

export { CHANGE_THEME };
`;

export const themeDarkModeFile = `export default {
    $theme: 'dark',
    $background: '#000000',
    $text: '#ffffff',
    $headerBackground: 'red',
  };
  `;

export const themeLightModeFile = `export default {
    $theme: 'light',
    $background: '#ffffff',
    $text: '#000000',
    $headerBackground: 'blue',
  };  
`;
//End

export const reduxIndexFile = `
import { createStore } from 'redux';

import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;
`;

export const rootReducerFile = `
import { combineReducers } from 'redux';

import authReducer from './auth';
import errorReducer from './error';
import themeReducer from './themes';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  theme: themeReducer,
});

export default rootReducer;
`;

export function generateReduxFolder(type = "js") {
  const fileList = [
    { name: "auth/actions", data: authActionFile },
    { name: "auth/types", data: authTypesFile },
    { name: "auth/reducer", data: authReducerFile },
    { name: "auth/index", data: createIndexFile("auth") },
    //Error
    { name: "error/actions", data: errorActionFile },
    { name: "error/types", data: errorTypesFile },
    { name: "error/reducer", data: errorReducerFile },
    { name: "error/index", data: createIndexFile("error") },
    //Themes
    { name: "themes/actions", data: themesActionFile },
    { name: "themes/types", data: themesTypesFile },
    { name: "themes/reducer", data: themesReducerFile },
    { name: "themes/index", data: createIndexFile("theme") },

    //Themes mode files
    { name: "themes/mode/dark", data: themeDarkModeFile },
    { name: "themes/mode/light", data: themeLightModeFile },
    //Root files
    { name: "index", data: reduxIndexFile },
    { name: "rootReducer", data: rootReducerFile },
  ];

  fileList.forEach((file) => {
    writeFileSync(`./src/redux/${file.name}.${type}`, file.data);
  });
}
