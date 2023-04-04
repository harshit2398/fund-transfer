import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { styles } from "./styles";

export const CustomDropDown = ({
  isVisible,
  setIsVisible,
  data,
  label,
  value,
  selected,
  onPress,
}: any) => {
  /** Dropdown item selected when user value select */
  // Keyboard.dismiss()
  const getKeyOfValue = () => {
    let selectedValue = null;
    if (selected?.hasOwnProperty([value])) {
      selectedValue = selected[value];
    }
    return selectedValue;
  };

  /** Close Modal */
  const closeModal = () => {
    setIsVisible(false);
  };

  /** List Items */
  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.itemWrapper}
        onPress={() => {
          onPress(item);
        }}
      >
        <Text style={styles.item}>{item[label]}</Text>
        {item[value] == getKeyOfValue() && <View style={styles.circle} />}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      animationInTiming={500}
      animationOutTiming={500}
      swipeDirection={"down"}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      onSwipeComplete={closeModal}
    >
      <View style={styles.wrapper}>
        <View style={styles.header} />

        <FlatList
          data={data}
          renderItem={renderItem}
          ListFooterComponent={() => <View style={{ height: 20 }} />}
          showsVerticalScrollIndicator={false}
          style={styles.flatList}
        />
        {data?.length === 0 && (
          <View style={styles.noDataWrapper}>
            <Text style={styles.noDataText}>No Data</Text>
          </View>
        )}
      </View>
    </Modal>
  );
};
