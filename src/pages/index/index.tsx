import { Swiper, SwiperItem, Text, View } from "@tarojs/components";
import React from "react";
import { AtButton } from "taro-ui";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  return (
    <View className="index">
      <Swiper
        className="test-h"
        indicatorColor="#cccccc"
        indicatorActiveColor="#333333"
        duration={500}
        circular
        indicatorDots
        autoplay
      >
        <SwiperItem>
          <View className="demo-text-1">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-2">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="demo-text-3">3</View>
        </SwiperItem>
      </Swiper>
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
  );
};
export default index;
