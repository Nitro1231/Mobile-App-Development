import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topBar}>
        <Text style={styles.title}>Currency Converter</Text>
      </View>


      <View style={styles.mainBox}>
        <Text>WARRROOO</Text>
      </View>

      <View style={styles.itemBox}>
        <Text>WARRROOO</Text>
      </View>


      <View style={styles.addBtn}>+</View>
    </View>
  );
}

    // alignItems: 'center',
    // justifyContent: 'center',
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#f0f0f0',
    alignItems: 'center',
    backgroundColor: '#282828'
  },
  topBar: {
    width: '100vw',
    height: '9vh',
    backgroundColor: '#121212',
    justifyContent: 'center'
  },
  title: {
    color: '#f0f0f0',
    fontSize: '4vh',
    fontWeight: 'bold',
    marginLeft: '5vw'
  },
  addBtn: {
    position: 'absolute',
    right: '5vw',
    bottom: '5vw',
    width: '15vw',
    height: '15vw',
    fontSize: '10vw',
    fontWeight: 'bold',
    borderRadius: '15vw',
    backgroundColor: '#9c88ff',
    boxShadow: '2px 2px 10px 5px #121212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainBox: {
    width: '86vw',
    height: '12vh',
    margin: '7vw',
    borderRadius: '5vw',
    boxShadow: '2px 2px 20px 5px #121212',
    backgroundColor: '#3E3E3E'
  },
  itemBox: {
    width: '70vw',
    height: '10vh',
    margin: '2vw',
    borderRadius: '5vw',
    boxShadow: '2px 2px 20px 5px #121212',
    backgroundColor: '#3E3E3E'
  }
});
