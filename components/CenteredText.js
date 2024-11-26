import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/styles";

const CenteredText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>M RAKAN NAUFAL</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

export default CenteredText;
