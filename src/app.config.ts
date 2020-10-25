export default {
  pages: [
    "pages/index/index",
    "pages/shop/shop",
    "pages/orders/orders",
    "pages/me/me"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    navigationStyle: "custom",
    enablePullDownRefresh: true,
    backgroundColor: "#cccccc"
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./resource/images/homeU.png",
        selectedIconPath: "./resource/images/home.png"
      },
      {
        pagePath: "pages/shop/shop",
        text: "点单",
        iconPath: "./resource/images/milkteaU.png",
        selectedIconPath: "./resource/images/milktea.png"
      },
      {
        pagePath: "pages/orders/orders",
        text: "订单",
        iconPath: "./resource/images/listU.png",
        selectedIconPath: "./resource/images/list.png"
      },
      {
        pagePath: "pages/me/me",
        text: "我的",
        iconPath: "./resource/images/meU.png",
        selectedIconPath: "./resource/images/me.png"
      }
    ],
    color: "#cccccc",
    selectedColor: "#333333",
    backgroundColor: "#f7f7f7",
    borderStyle: "black"
  }
};
