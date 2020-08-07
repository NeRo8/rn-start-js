import i18n from 'i18n-js';
import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance

import {I18nManager} from 'react-native';

const translationGetters = {
  ru: () => require('./translation/ru.json'),
  en: () => require('./translation/en.json'),
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const setI18nConfig = (option = null) => {
  // fallback if no available language fits
  var fallback = {languageTag: 'ru', isRTL: false};

  if (option !== null) {
    fallback = option;
  }

  const {languageTag, isRTL} = fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  i18n.locale = languageTag;
};

export {translate};

export default setI18nConfig;
