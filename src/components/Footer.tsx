import React, { useState } from "react";
import { AtTabBar } from "taro-ui";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const [page, setpage] = useState(0);
  return (
    <AtTabBar
      tabList={[
        { title: "首页", iconType: "home" },
        { title: "点单", iconType: "shopping-bag" },
        { title: "订单", iconType: "menu", text: "100", max: 99 },
        { title: "我的", iconType: "user", text: "hello" }
      ]}
      onClick={() => setpage(0)}
      current={page}
    />
  );
};
