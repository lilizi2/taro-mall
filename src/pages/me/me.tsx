import { Text, View } from "@tarojs/components";
import React from "react";
import { Footer } from "../../components/Footer";

interface meProps {}

export const me: React.FC<meProps> = () => {
  return (
    <View>
      <Text>me</Text>
      <Footer />
    </View>
  );
};

export default me;
