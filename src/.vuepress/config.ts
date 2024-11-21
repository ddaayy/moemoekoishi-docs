import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "恋萌萌Bot",
  description: "恋萌萌Bot文档指南",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
