import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

import Options from "./screens/Options";

// NPM packs
import getCurrencySymbol from "currency-symbol-map";

export default function App() {
  state = {
    code: "USD",
    amount: 100,
    amountInUSD: 100,
  };

  const onChangeValue = (value) => {
    // TODO: add currency calculation method via API.
    const num = parseInt(value.replace(/[^0-9]/g, ""));
    setState(num === undefined ? 0 : num);
  };

  const getFlag = (code) => {
    return `https://github.com/transferwise/currency-flags/blob/master/src/flags/${code.toLowerCase()}.png?raw=true`
  };

  const getMain = () => {
    // TODO: add currency calculation method via API.
    return (
      <View style={[styles.mainItem, styles.shadow]}>
        <Image
          style={styles.mainFlag}
          source={{uri: getFlag(state.code)}}
        />
        <Text style={[styles.h1, styles.flexBox1]}>{state.code}</Text>
        <Text style={[styles.h1, styles.flexBox1]}>
          {getCurrencySymbol(state.code)}
        </Text>
        <TextInput
          style={[styles.h1, styles.inputBox]}
          keyboardType="numeric"
          onChangeText={(value) => onChangeValue(value)}
          value={`${state.amount}`}
          maxLength={10}
        />
      </View>
    );
  };

  const getSubItem = (currencyCode, amount) => {
    // TODO: add currency calculation method via API.
    return (
      <View style={[styles.subItem, styles.shadow]}>
        <Image
          style={styles.subFlag}
          source={{
            uri: getFlag(currencyCode),
          }}
        />
        <Text style={[styles.h1, styles.flexBox1]}>{currencyCode}</Text>
        <Text style={[styles.h1, styles.flexBox3]}>
          {`${getCurrencySymbol(currencyCode)} ${amount}`}
        </Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.topBar}>
          <Text style={styles.title}>Currecy Converter</Text>
        </View>
        <View style={styles.mainBox}>
          {getMain()}
        </View>
        <ScrollView
          style={styles.itemBox}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {getSubItem("EUR", "82.72")}
          {getSubItem("GBP", "71.98")}
          {getSubItem("KRW", "110,832.19")}
          {getSubItem("JPY", "10,600.63")}
          {getSubItem("CNY", "645.69")}
          {getSubItem("INR", "7,288.16")}
        </ScrollView>
        <View style={[styles.addBtn, styles.shadow]}>
          <Text style={styles.addText}>+</Text>
        </View>
        <Options />
      </View>
    </>
  );
}

// alignItems: "center",
// justifyContent: "center",
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  h1: {
    color: "#f0f0f0",
    fontSize: 18,
    fontWeight: "bold",
  },
  topBar: {
    //flex: 1,
    height: 80,
    backgroundColor: "#202225",
    justifyContent: "center",
  },
  mainBox: {
    height: 150,
    backgroundColor: "#2F3136",
    alignItems: "center",
    justifyContent: "center",
  },
  itemBox: {
    flex: 1,
    backgroundColor: "#2F3136",
  },
  title: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "#f0f0f0",
  },
  flexBox1: {
    flex: 1,
    textAlign: "center",
  },
  flexBox3: {
    flex: 3,
    textAlign: "center",
  },
  mainItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "86%",
    height: 100,
    marginTop: 25,
    marginBottom: 25,
    borderRadius: 20,
    backgroundColor: "#9c88ff",
  },
  subItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    height: 80,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "#494D56",
  },
  addBtn: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 75,
    height: 75,
    borderRadius: 75,
    backgroundColor: "#9c88ff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3
  },
  addText: {
    fontSize: 40,
    lineHeight: 70,
    fontWeight: "bold",
    color: "#f0f0f0",
  },
  inputBox: {
    flex: 3,
    textAlign: "center",
  },
  mainFlag: {
    width: 60,
    height: 60,
    margin: 20,
    borderRadius: 15,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  subFlag: {
    width: 44,
    height: 44,
    margin: 18,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
