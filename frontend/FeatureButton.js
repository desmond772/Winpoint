import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function FeatureButton({ feature, setActiveFeature }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setActiveFeature(feature.name)}
    >
      <Text style={styles.text}>{feature.name}</Text>
      <Text style={styles.desc}>{feature.desc}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { margin: 5, backgroundColor: '#555', padding: 10, borderRadius: 8 },
  text: { color: '#fff', fontWeight: 'bold' },
  desc: { color: '#fff', fontSize: 10 }
});
