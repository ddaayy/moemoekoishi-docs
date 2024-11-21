import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "食用指南",
    link: "/demo/",
  },
  {
    text: "指令",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "投喂赞助",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
