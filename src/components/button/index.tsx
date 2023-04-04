import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

interface props {
  label?: any;
  placeholder?: any;
  LeftIcon?: any;
  RightIcon?: any;
  wrapper?: any;
  labelStyle?: any;
  input?: any;
  inputWrapper?: any;
  required?: any;
  value?: any;
  error?: any;
  touched?: any;
  errorStyle?: any;
  inputText?: any;
  onPress?: any;
  labelButton?: any;
  labelButtonPress?: any;
  preFilled?: any;
}
export const InputButton = ({
  label,
  placeholder,

  wrapper,
  labelStyle,
  input,
  inputWrapper,
  required = false,
  value,
  onPress,
  error,
  touched,
  errorStyle,
  inputText,

  preFilled = false,
}: props) => {
  return (
    <View style={[styles.wrapper, wrapper]}>
      <View style={styles.labelButtonWrapper}>
        {label && (
          <Text style={[styles.label, labelStyle]}>
            {label} {required && <Text style={{ color: colors.red }}>*</Text>}
          </Text>
        )}
      </View>

      <View
        style={[
          styles.inputWrapper,
          inputWrapper,
          { backgroundColor: preFilled ? colors.smokeGrey : "transparent" },
        ]}
      >
        <TouchableOpacity style={[styles.input, input]} onPress={onPress}>
          <Text style={[styles.inputText, inputText]}>
            {value ? value : placeholder}
          </Text>
        </TouchableOpacity>
      </View>
      {error && touched && (
        <Text style={[styles.error, errorStyle]}>{error}</Text>
      )}
    </View>
  );
};

export const CustomButton = ({
  onPress,
  title,
  buttonStyle = {},
  titleStyle = {},
  loading,
}: any) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={colors.white} />
      ) : (
        <Text style={[styles.text, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
