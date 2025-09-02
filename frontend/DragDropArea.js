import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DragDropArea({ activeFeature }) {
  return (
    <View style={[styles.area, activeFeature ? styles.active : null]}>
      {activeFeature ? (
        <Text style={styles.activeText}>
          <Text style={styles.redPot}>⬤</Text> {activeFeature}
        </Text>
      ) : (
        <Text style={styles.text}>Drop feature here</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    marginTop: 15,
    height: 50,
    backgroundColor: '#222',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    borderColor: 'red',
    borderWidth: 2
  },
  redPot: {
    color: 'red',
    fontSize: 18
  },
  activeText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  text: {
    color: '#aaa'
  }
});
