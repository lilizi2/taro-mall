import { Text, View } from "@tarojs/components";
import React from "react";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { Banner } from "../../components/Banner";
import "./index.scss";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  return (
    <View className="main">
      <Banner />
      <View>
        <Text>Hello world!</Text>
        <AtButton type="primary">I need Taro UI</AtButton>
        <Text>Li UI 支持 Vue 了吗？</Text>
        <AtButton type="primary" circle={true}>
          支持
        </AtButton>
        <Text>共建？</Text>
        <AtButton type="secondary" circle={true}>
          来
        </AtButton>
      </View>
    </View>
  );
};
export default index;
