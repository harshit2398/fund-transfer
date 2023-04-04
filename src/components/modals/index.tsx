import { View, Text } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { colors } from "../../theme/colors";
import { styles } from "./styles";
import { CustomButton } from "../button";
export const SuccessModal = ({ isVisible, onPress }: any) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropColor={colors.smokeGrey}
      backdropOpacity={1}
      style={styles.model}
      animationIn={"lightSpeedIn"}
      animationOut={"lightSpeedOut"}
    >
      <View style={styles.box}>
        <Text style={styles.title}>Congratulations!</Text>

        <Text style={styles.message}>
          Your amount has been {"\n"}successfully transferred
        </Text>
        <CustomButton
          title={"Continue"}
          onPress={onPress}
          buttonStyle={{ width: "60%", paddingVertical: 10 }}
        />
      </View>
    </Modal>
  );
};
