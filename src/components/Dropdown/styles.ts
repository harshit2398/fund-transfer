import {  StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { size, weight } from "../../theme/fonts";
import metrics from "../../theme/metrics";
export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    padding: 0,
    justifyContent: "flex-end",
  },
  header: {
    backgroundColor: colors.white,
    height: 4,
    width: 100,
    alignSelf: "center",
    marginVertical: 20,
    borderRadius: 5,
  },
  wrapper: {
    backgroundColor: colors.primary,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 15,
  },

  itemWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  item: {
    color: colors.white,
    fontSize: size.font16,
    fontWeight: weight.semi,
  },

  flatList: {
    maxHeight: metrics.screenHeight / 1.4,
  },
  noDataWrapper: {
    height: 60,
    justifyContent: "flex-start",
  },
  noDataText: {
    textAlign: "center",
    color: colors.white,
    fontSize: size.font16,
    fontWeight: weight.semi,
  },
  circle: {
    height: 6,
    width: 6,
    backgroundColor: colors.white,
    borderRadius: 6 / 2,
  },
});
