import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
      <Text style={styles.titleStyle}>Welcome!</Text>
      {/* <StatusBar style="auto" /> */}
      <Text>Add a photo so other members know who you are</Text>
      </View>
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

  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 32,
    color: 'blue'
  }
});
