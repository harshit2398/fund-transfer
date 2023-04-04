import { Text, TextInput, View } from "react-native";
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
  placeholderTextColor?: any;
  inputWrapper?: any;
  required?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  error?: any;
  touched?: any;
  errorStyle?: any;
  keyboardType?: any;
  maxLength?: any;
  autoCapitalize?: any;
  multiline?: any;
  numberOfLines?: any;
  labelButton?: any;
  labelButtonPress?: any;
}
export const Input = ({
  label,
  placeholder,

  wrapper,
  labelStyle,
  input,
  placeholderTextColor,
  inputWrapper,
  required = false,
  value,
  onChangeText,
  onBlur,
  error,
  touched,
  errorStyle,
  keyboardType = "default",
  maxLength = 50,
  autoCapitalize = "none",
  multiline = false,
  numberOfLines = 1,
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
      <View style={[styles.inputWrapper, inputWrapper]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : colors.grey
          }
          style={[styles.input, input]}
        />
      </View>
      {error && touched && (
        <Text style={[styles.error, errorStyle]}>{error}</Text>
      )}
    </View>
  );
};
