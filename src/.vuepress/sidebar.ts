import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前言须知",
      icon: "line-md:bell-twotone-alert-loop",
      prefix: "demo/",
      link: "demo/",
    },
    {
      text: "QQ平台",
      icon: "line-md:phone-call-twotone-loop",
      prefix: "qq/",
      link: "qq/",
      children: "structure",
    },
    {
      text: "QQ无印版",
      icon: "line-md:compass-twotone-loop",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
