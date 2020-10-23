import React, { useState } from "react";
import { AtTabBar } from "taro-ui";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const [page, setpage] = useState(0);
  return (
    <AtTabBar
      tabList={[
        { title: "待办事项", iconType: "bullet-list", text: "new" },
        { title: "拍照", iconType: "camera" },
        { title: "文件夹", iconType: "folder", text: "100", max: 99 }
      ]}
      onClick={() => setpage(0)}
      current={page}
    />
  );
};
