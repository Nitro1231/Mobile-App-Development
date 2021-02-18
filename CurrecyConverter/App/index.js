import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Options from "./screens/Options";

export default function App() {
  const testFunction = (text) => {
    return(
      <Text>{text}</Text>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>TEST</Text>
      {testFunction('This is method test')}
      <Options />
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
