import { Image, View } from "@tarojs/components";
import React from "react";
// @ts-ignore
import banner from "../resource/images/banner.png";
import "./Banner.scss";
interface BannerProps {}
export const Banner: React.FC<BannerProps> = () => {
  return (
    <View>
      <Image className="banner" src={banner} />
    </View>
  );
};
