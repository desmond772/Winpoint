import React, { useState } from 'react';
import FeatureButton from './FeatureButton';
import DragDropArea from './DragDropArea';
import { View, Text, StyleSheet } from 'react-native';

const features = [
  { name: 'Buy1', desc: 'Buy Action' },
  { name: 'Sell1', desc: 'Sell Action' },
  { name: 'TrigTime', desc: 'Trigger Timeframe' },
  { name: 'TF1', desc: 'Timeframe 1 min' },
  { name: 'TF2', desc: 'Timeframe 2 min' },
  { name: 'TF3', desc: 'Timeframe 3 min' },
  { name: 'TF4', desc: 'Timeframe 4 min' },
  { name: 'TF5', desc: 'Timeframe 5 min' },
  { name: 'TrigCont', desc: 'Trigger Container' },
  { name: 'IncAmt', desc: 'Increase Amount' },
  { name: 'DecAmt', desc: 'Decrease Amount' },
  { name: 'TrigSig', desc: 'Trigger Signal' },
  { name: 'SearchSig', desc: 'Search Signal' },
  { name: 'ConfTrade', desc: 'Confirm Trade' }
];

export default function FloatingBar() {
  const [activeFeature, setActiveFeature] = useState(null);

  return (
    <View style={styles.bar}>
      <Text style={styles.title}>Trading Automation Bar</Text>
      <View style={styles.features}>
        {features.map(f => (
          <FeatureButton key={f.name} feature={f} setActiveFeature={setActiveFeature} />
        ))}
      </View>
      <DragDropArea activeFeature={activeFeature} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { padding: 10, backgroundColor: '#333', borderRadius: 12 },
  title: { color: 'white', fontSize: 18, marginBottom: 8 },
  features: { flexDirection: 'row', flexWrap: 'wrap' }
});
