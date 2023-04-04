import {  StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { size, weight } from "../../theme/fonts";
import metrics from "../../theme/metrics";
export const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  hiText: {
    color: colors.black,
    fontSize: size.font24,
    fontWeight: weight.semi,
  },
  nameText: {
    color: colors.primary,
    fontSize: size.font32,
    fontWeight: weight.full,
    width: metrics.screenWidth / 1.55,
  },

  appName: {
    color: colors.green,
    fontSize: size.font14,
    fontWeight: weight.semi,
  },
  });