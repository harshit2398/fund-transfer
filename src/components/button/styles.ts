import { Platform, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { size, weight } from "../../theme/fonts";
export const styles = StyleSheet.create({
    wrapper: {
      paddingVertical: 20,
    },
    input: {
      flex: 1,
      padding: Platform.OS === "ios" ? 12 : 8,
      height: 50,
      justifyContent: "center",
    },
    inputText: {
      color: colors.primary,
      fontSize: size.font12,
      fontWeight: weight.semi,
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

    button: {
        backgroundColor: colors.primary,
        width: "100%",
        alignSelf: "center",
        paddingVertical: 16,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        shadowColor: "#fff",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 3,
      },
      text: {
        color: colors.white,
        fontSize: size.font14,
        fontWeight: weight.semi,
      },
  });