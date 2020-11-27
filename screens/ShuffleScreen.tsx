import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { theme } from '../assets/theme';
import Card from '../components/card';

const ShuffleScreen = () => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.pokerGreen,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Hello</Text>
      <Card suit="♦" value="A" />
    </View>
  );
};

export default ShuffleScreen;
