import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default () => {
  return (
      <>
        <View style={styles.back} />
        <View style={styles.container}>
          <View style={[styles.option, styles.shadow]}>
            <Text style={styles.title}>Options</Text>
            <View style={[styles.items, styles.shadow]}>
              <Text style={styles.text}>Home</Text>
            </View>
            <View style={[styles.items, styles.shadow]}>
              <Text style={styles.text}>Refresh</Text>
            </View>
            <View style={[styles.items, styles.shadow]}>
              <Text style={styles.text}>Clear</Text>
            </View>
            <View style={[styles.items, styles.shadow]}>
              <Text style={styles.text}>About</Text>
            </View>
          </View>
        </View>
      </>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    position: "absolute",
    width: '100%',
    height: '100%',
    flexDirection: "column",
    backgroundColor: "#222222",
    opacity: 0.8,
    zIndex: 4
  },
  container: {
    position: "absolute",
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5
  },
  option: {
    width: '80%',
    height: 'auto',
    padding: '5%',
    borderRadius: 20,
    backgroundColor: '#40444B',
    alignItems: "center",
    justifyContent: "center",
    zIndex: 6
  },
  items: {
    width: '100%',
    height: 'auto',
    padding: '8%',
    margin: '2%',
    borderRadius: 20,
    backgroundColor: '#2F3136',
    zIndex: 6
  },
  title: {
    color: '#f0f0f0',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: '5%'
  },
  text: {
    color: '#f0f0f0',
    fontSize: 18
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
