function createScreen(name) {
  return `import React from 'react';
  import { SafeAreaView, Text, Switch } from 'react-native';
  
  
  import styles from './styles';
  import { translate } from '../../../i18n';
  
  
  function ${name}() {
    
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{translate('hello')}</Text>
        
      </SafeAreaView>
    );
  }
  
  export default ${name};`;
}

function createAuthScreen(name = "Auth") {
  return `import React, { useState, useEffect } from 'react';
  import { SafeAreaView, Text, Switch } from 'react-native';
  import { useDispatch } from 'react-redux';
  
  import styles from './styles';
  import { translate } from '../../../i18n';
  import { themeActions } from '../../../redux/themes';
  
  function ${name}() {
    const [isActive, changeTheme] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
      const themeName = isActive ? 'dark' : 'light';
      dispatch(themeActions.changeThemeMode(themeName));
    }, [isActive]);
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{translate('hello')}</Text>
        <Switch value={isActive} onValueChange={() => changeTheme(!isActive)} />
      </SafeAreaView>
    );
  }
  
  export default ${name};`;
}

function createDefaultStyle() {
  return `
  import EStyleSheet from 'react-native-extended-stylesheet';

  export default EStyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '$background',
    },
    text: {
      fontSize: 20,
      color: '$text',
      marginBottom: 20,
    },
  });`;
}

export { createAuthScreen, createDefaultStyle, createScreen };
