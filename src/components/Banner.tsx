import { Image, View } from "@tarojs/components";
import React from "react";
// @ts-ignore
import banner from "../resource/images/banner.png";
interface BannerProps {}

export const Banner: React.FC<BannerProps> = () => {
  return (
    <View>
      <Image
        style="width: 375px;height: 300px;background: #e7fcf8;"
        src={banner}
      />
    </View>
  );
};
