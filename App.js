import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Clock from './Clock';
import Toggle from './Toggle';

export default function App() {
  return (
    <View style={styles.container}>
      <Clock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
