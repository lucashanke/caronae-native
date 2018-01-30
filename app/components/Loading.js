import React from 'react';
import {
  View,
  ActivityIndicator,
} from 'react-native';

import appStyles from '../styles';

const Loading = () => (
  <View style={appStyles.loading}>
    <ActivityIndicator size='large' />
  </View>
);

export default Loading;