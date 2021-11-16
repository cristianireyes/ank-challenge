import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Loading = () => <ActivityIndicator animating={true} color={Colors.red700} />;

export default Loading;
