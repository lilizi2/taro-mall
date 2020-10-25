import { View } from "@tarojs/components";
import React, { useState } from "react";
import { AtTabs, AtTabsPane } from "taro-ui";
import "./shop.scss";

interface shopProps {}

export const shop: React.FC<shopProps> = () => {
  const [kind, setkind] = useState(0);
  const tabList = [
    { title: "标签页1" },
    { title: "标签页2" },
    { title: "标签页3" }
  ];
  return (
    <View>
      <AtTabs
        current={kind}
        scroll
        height="200px"
        tabDirection="vertical"
        tabList={[
          { title: "标签页1" },
          { title: "标签页2" },
          { title: "标签页3" },
          { title: "标签页4" },
          { title: "标签页5" },
          { title: "标签页6" }
        ]}
        onClick={(num: number) => {
          setkind(num);
        }}
      >
        <AtTabsPane tabDirection="vertical" current={kind} index={0}>
          <View className="listLable">123</View>
          <View className="at-row ">
            <View className="at-col at-col-3">A</View>
            <View className="at-col at-col-6">B</View>
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={kind} index={1}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页二的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={kind} index={2}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页三的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={kind} index={3}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页四的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={kind} index={4}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页五的内容
          </View>
        </AtTabsPane>
        <AtTabsPane tabDirection="vertical" current={kind} index={5}>
          <View style="font-size:18px;text-align:center;height:200px;">
            标签页六的内容
          </View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
};

export default shop;
