import { Text, View } from "@tarojs/components";
import React from "react";
import { Footer } from "../../components/Footer";
import "./orders.scss";

interface ordersProps {}

export const orders: React.FC<ordersProps> = () => {
  return (
    <View>
      <Text>orders</Text>
      <Footer />
    </View>
  );
};

export default orders;
