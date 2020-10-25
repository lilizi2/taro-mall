import { View } from "@tarojs/components";
import React from "react";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { Banner } from "../../components/Banner";
import "./index.scss";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  return (
    <View>
      <Banner />
      <View className="main">
        <View className="selectBox">
          <View className="selectBox_left cb">门店自取</View>
          <View className="selectBox_right cb">外卖</View>
        </View>
        <View className="footer">
          <View className="footer_jifen">我的积分 9</View>
          <View className="footer_erweima">code</View>
        </View>
      </View>
    </View>
  );
};
export default index;
