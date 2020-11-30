import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardPropTypes {
  suit: string;
  value: string;
}

const Card = ({ suit, value }: CardPropTypes) => {
  const [deck, setDeck] = useState([]);

  const suitColor = () => {
    if (suit === '♥' || suit == '♦') {
      return '#ff0000';
    }

    return '#000000';
  };

  return (
    <View style={styles.cardStyle}>
      <View style={styles.upperLegendContainerStyle}>
        <Text style={{ color: suitColor() }}>{value}</Text>
        <Text style={{ color: suitColor() }}>{suit}</Text>
      </View>
      <View style={styles.centerLegendContainerStyle}>
        <Text style={[styles.centerLegendTextStyle, { color: suitColor() }]}>
          {suit}
        </Text>
      </View>
      <View style={styles.lowerLegendContainerStyle}>
        <Text style={[styles.lowerLegendTextStyle, { color: suitColor() }]}>
          {suit}
        </Text>
        <Text style={[styles.lowerLegendTextStyle, { color: suitColor() }]}>
          {value}
        </Text>
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
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flexDirection: 'column'
  },

  upperLegendContainerStyle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',

    marginTop: 5,
    marginLeft: 10
  },
  centerLegendContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerLegendTextStyle: {
    fontSize: 36
  },
  lowerLegendContainerStyle: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginRight: 10,
    width: '100%'
  },
  lowerLegendTextStyle: {
    transform: [{ rotate: '180deg' }]
  }
});

export default Card;
