import { Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

export const HomeHeader = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.hiText}>Hi,</Text>
      <Text style={styles.nameText}>{"Nelson"}</Text>
      <Text style={styles.appName}>{"Fund Transfer"}</Text>
    </View>
  );
};
