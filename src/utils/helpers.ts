import { Platform } from "react-native";

/** Check the plate form Android or IOS*/
export const isPlateFormIOS = () => {
    return Platform.OS === 'ios' ? true : false;
  };