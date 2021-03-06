import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#f2787b",
    alignItems: "center",
    justifyContent: "center"
  },
  headertitle: {
    color: "black",
    fontSize: 18
  }
});

export default Header;
