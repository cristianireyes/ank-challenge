import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = () => (
  <View style={{ flex: 1, justifyContent: 'center' }}>
    <ActivityIndicator animating={true} color={Colors.red700} />
  </View>
);

export default Loading;
