import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardPropTypes {
  suit: string;
  value: string;
}

const Card = ({ suit, value }: CardPropTypes) => {
  return (
    <View style={styles.cardStyle}>
      <View style={styles.upperLegendStyle}>
        <Text>{value}</Text>
        <Text>{suit}</Text>
      </View>
      <View style={styles.centerLegendStyle}>
        <Text>{value}</Text>
      </View>
      <View style={styles.lowerLegendStyle}>
        <Text>{suit}</Text>
        <Text>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: 100,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column'
  },

  upperLegendStyle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',

    marginTop: 5,
    marginLeft: 10
  },
  centerLegendStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lowerLegendStyle: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginRight: 10,
    width: '100%'
  }
});

export default Card;
