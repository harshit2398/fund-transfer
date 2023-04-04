import React from "react";
import { SafeAreaView } from "react-native";

import { colors } from "./src/theme/colors";
import { Form } from "./src/Form";
const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.lightBlue, flex: 1 }}>
      <Form />
    </SafeAreaView>
  );
};

export default App;
