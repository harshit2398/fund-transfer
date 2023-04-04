import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { size, weight } from "../../theme/fonts";
import metrics from "../../theme/metrics";
export const styles = StyleSheet.create({
  model: {
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  box: {
    backgroundColor: colors.white,
    width: metrics.screenWidth / 1.2,
    height:metrics.screenWidth ,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    color: colors.primary,
    fontWeight: weight.bold,
    fontSize: size.font24,
  },
  message: {
    color: colors.darkGrey,
    textAlign: 'center',
    fontSize: size.font12,
    fontWeight: weight.semi,
  },
});