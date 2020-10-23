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
    enablePullDownRefresh: true
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./resource/images/home-outline.svg",
        selectedIconPath: "./resource/images/home.svg"
      },
      {
        pagePath: "pages/shop/shop",
        text: "点单",
        iconPath: "./resource/images/bag-outline.svg",
        selectedIconPath: "./resource/images/bag.svg"
      },
      {
        pagePath: "pages/orders/orders",
        text: "订单",
        iconPath: "./resource/images/reorder-outline.svg",
        selectedIconPath: "./resource/images/reorder.svg"
      },
      {
        pagePath: "pages/me/me",
        text: "我的",
        iconPath: "./resource/images/person-outline.svg",
        selectedIconPath: "./resource/images/person.svg"
      }
    ],
    color: "#cccccc",
    selectedColor: "#333333",
    backgroundColor: "#f7f7f7",
    borderStyle: "black"
  }
};
