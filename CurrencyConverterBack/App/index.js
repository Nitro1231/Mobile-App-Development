import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";

// NPM packs
// import CurrencyFlag from "react-currency-flags";
import getCurrencySymbol from "currency-symbol-map";

export default class App extends Component {
  state = {
    code: "USD",
    amount: 100,
    amountInUSD: 100,
  };

  onChangeValue(value) {
    // TODO: add currency calculation method via API.
    this.setState({ amount: parseInt(value.replace(/[^0-9]/g, "")) });
  }

  getMain() {
    // TODO: add currency calculation method via API.
    return (
      <View style={styles.mainBox}>
        <Image
          style={styles.flag}
          source={{uri:`https://github.com/transferwise/currency-flags/blob/master/src/flags/${this.state.code.toLowerCase()}.png?raw=true`}}
        />
        <Text style={styles.h1}>{this.state.code}</Text>
        <Text style={styles.h1}>{getCurrencySymbol(this.state.code)}</Text>
        <TextInput
          style={[styles.h1, styles.inputBox]}
          keyboardType="numeric"
          onChangeText={(value) => this.onChangeValue(value)}
          value={this.state.amount}
          maxLength={10}
        />
      </View>
    );
  }

  getItem(currencyCode, amount) {
    // TODO: add currency calculation method via API.
    return (
      <View style={styles.itemBox}>
        <Image
          style={styles.flag}
          source={{uri:`https://github.com/transferwise/currency-flags/blob/master/src/flags/${currencyCode.toLowerCase()}.png?raw=true`}}
        />
        <Text style={styles.h1}>{currencyCode}</Text>
        <Text style={styles.h1}>
          {`${getCurrencySymbol(currencyCode)} ${amount}`}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topBar}>
          <Text style={styles.title}>Currency Converter</Text>
        </View>

        {this.getMain()}

        <View style={styles.listView}>
          {this.getItem("EUR", "82.72")}
          {this.getItem("GBP", "71.98")}
          {this.getItem("KRW", "110,832.19")}
          {this.getItem("JPY", "10,600.63")}
          {this.getItem("CNY", "645.69")}
          {this.getItem("INR", "7,288.16")}
        </View>

        <View style={styles.addBtn}>
          <Text style={styles.addText}>+</Text>
        </View>
      </View>
    );
  }
}

// alignItems: 'center',
// justifyContent: 'center',
const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#f0f0f0",
    alignItems: "center",
    backgroundColor: "#282828",
    maxHeight: "100vh",
  },
  h1: {
    color: "#f0f0f0",
    fontSize: 18,
    fontWeight: "bold",
  },
  topBar: {
    width: "100vw",
    height: "9vh",
    backgroundColor: "#121212",
    justifyContent: "center",
  },
  title: {
    color: "#f0f0f0",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "5vw",
  },
  addBtn: {
    position: "absolute",
    right: "5vw",
    bottom: "5vw",
    width: "15vw",
    height: "15vw",
    borderRadius: 15,
    backgroundColor: "#9c88ff",
    //boxShadow: "2px 2px 10px 5px #121212",
    alignItems: "center",
    justifyContent: "center",
  },
  addText:{
    fontSize: 40,
    lineHeight: 40,
    fontWeight: "bold",
    color: '#f0f0f0'
  },
  mainBox: {
    display: "flex",
    flexDirection: 'row',
    //gridTemplateColumns: "20vw auto auto auto",
    alignItems: "center",
    width: "86vw",
    height: "12vh",
    margin: "7vw",
    borderRadius: 5,
    //boxShadow: "0px 4px 20px 5px #121212",
    backgroundColor: "#9c88ff",
  },
  inputBox: {
    width: "40vw",
    textAlign: "center",
  },
  listView: {
    width: "100vw",
    height: "70vh",
    paddingTop: "3vh",
    overflow: "scroll",
    alignItems: "center",
  },
  itemBox: {
    //display: "inline-grid",
    //gridTemplateColumns: "18vw auto auto",
    alignItems: "center",
    width: "70vw",
    height: "10vh",
    margin: "2vw",
    borderRadius: 5,
    //boxShadow: "0px 4px 20px 5px #121212",
    backgroundColor: "#3E3E3E",
  },
  flag: {
    width: "10vw",
    height: "10vw",
    marginLeft: "4vw",
    borderRadius: 2,
    //boxShadow: "0px 0px 10px 2px #222222",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
});