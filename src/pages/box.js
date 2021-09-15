import React, { Component } from "react";

import { StyleSheet, View } from "react-native";

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.SquareShapeView} />

        <View style={styles.RectangleShapeView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

  SquareShapeView: {
    width: 120,
    height: 120,
    backgroundColor: "#00BCD4"
  },

  RectangleShapeView: {
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    backgroundColor: "#FFC107"
  }
});
