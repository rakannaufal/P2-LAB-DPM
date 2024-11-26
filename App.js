import React from "react";
import { SafeAreaView } from "react-native";
import CenteredText from "./components/CenteredText";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CenteredText />
    </SafeAreaView>
  );
};

export default App;
