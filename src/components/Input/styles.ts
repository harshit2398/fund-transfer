import { Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { size, weight } from "../../theme/fonts";
export const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
  },
  input: {
    flex: 1,
    color: colors.primary,
    fontSize: size.font12,
    fontWeight: weight.semi,
    padding: Platform.OS === "ios" ? 12 : 8,
    height: 50,
  },
  label: {
    marginVertical: 5,
    color: colors.primary,
    fontSize: size.fon14,
    fontWeight: weight.semi,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  error: {
    fontWeight: weight.semi,
    fontSize: size.font10,
    color: colors.red,
    marginTop: 5,
    marginLeft: 5,
  },
  labelButtonWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});