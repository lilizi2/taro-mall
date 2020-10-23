import { Text, View } from "@tarojs/components";
import React from "react";
import { Footer } from "../../components/Footer";
import "./shop.scss";

interface shopProps {}

export const shop: React.FC<shopProps> = () => {
  return (
    <View>
      <Text>shop</Text>
      <Footer />
    </View>
  );
};

export default shop;
