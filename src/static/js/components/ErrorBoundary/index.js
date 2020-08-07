import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';

import {useSelector} from 'react-redux';

function ErrorBoundary({children}) {
  const {loading} = useSelector((state) => state.error);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  return <View style={{flex: 1}}>{children}</View>;
}

export default ErrorBoundary;
