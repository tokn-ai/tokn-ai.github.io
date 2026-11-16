import type { Locale } from "./locales";

const en = {
  title: "Apell — A home for your applets",
  description: "Run installable applets on iOS, Android, and macOS. Share model access across applets and keep each applet's local data private.",
  og_alt: "Apell's four-tile app icon",
  switch_language: "切换到简体中文",
  overview: "Overview",
  developers: "For developers",
  headline: "Your applets.",
  emphasis: "One place.",
  intro: "Apell runs installable applets on iOS, Android, and macOS. Set up your model providers once and keep each applet's local data private.",
  build_apell: "Build Apell",
  build_applet: "Build an applet",
  preview_caption: "Illustration of the Apell launcher and the included Companion applet",
  launcher_applets: ["Companion", "Paper Reader"],
  recent_chat: "Weekend in the city",
  chat_question: "Help me plan a quiet Saturday.",
  chat_answer: "Start with a bookshop, stop for a long lunch, and leave the afternoon open for a walk.",
  chat_placeholder: "Message Companion",
  features_title: "Install an applet. Open it and get started.",
  features: [
    {
      name: "Install from a file or GitHub",
      detail: "Open a local .apel package or install one from a public GitHub release. Applets appear in the launcher as soon as they're installed.",
    },
    {
      name: "Share model connections",
      detail: "Manage model providers and credentials in Apell. Applets can use the connections you configure through the host API.",
    },
    {
      name: "Pick up where you left off",
      detail: "Each applet has its own local files and SQLite data. Companion keeps saved chats and can finish a reply while its view is closed.",
    },
  ],
  developer_title: "Ship an applet from your own repo.",
  developer_detail: "Package a web frontend with a manifest and an optional Rust WebAssembly backend. Use Apell's APIs for model access, storage, and device capabilities.",
  guide: "Read the applet guide",
  api: "Host API reference",
  package_label: "Inside a .apel package",
  package_optional: "optional backend",
  back: "Tokn AI home",
  source: "Source on GitHub",
};

const zh: typeof en = {
  title: "Apell — 你的小程序，都在这里",
  description: "在 iOS、Android 和 macOS 上运行可安装的小程序。共享模型连接，同时为每个小程序保留独立的本地数据。",
  og_alt: "由四块方形组成的 Apell 图标",
  switch_language: "Switch to English",
  overview: "概览",
  developers: "开发指南",
  headline: "你的小程序，",
  emphasis: "都在这里。",
  intro: "在 iOS、Android 和 macOS 上安装并运行小程序。模型服务配置一次即可共用，每个小程序仍有独立的本地数据。",
  build_apell: "构建 Apell",
  build_applet: "开发小程序",
  preview_caption: "Apell 启动器和内置 Companion 小程序的界面示意",
  launcher_applets: ["Companion", "论文阅读器"],
  recent_chat: "城里过周末",
  chat_question: "帮我安排一个轻松的周六。",
  chat_answer: "上午逛逛书店，中午慢慢吃顿饭，下午留点时间散步。",
  chat_placeholder: "发消息给 Companion",
  features_title: "安装小程序，打开就能用。",
  features: [
    {
      name: "从文件或 GitHub 安装",
      detail: "打开本地 .apel 文件，或从公开的 GitHub Release 安装。安装后，小程序会出现在启动器中。",
    },
    {
      name: "共用模型连接",
      detail: "在 Apell 中管理模型服务和凭据。小程序通过宿主 API 使用你配置好的连接。",
    },
    {
      name: "回来接着用",
      detail: "每个小程序都有自己的本地文件和 SQLite 数据。Companion 会保存对话，关闭界面后也能完成正在生成的回复。",
    },
  ],
  developer_title: "在自己的仓库里发布小程序。",
  developer_detail: "将网页前端和清单打包，也可以带上 Rust WebAssembly 后端。通过 Apell 的 API 使用模型、存储和设备能力。",
  guide: "阅读小程序开发指南",
  api: "宿主 API 参考",
  package_label: ".apel 包的文件结构",
  package_optional: "可选后端",
  back: "Tokn AI 首页",
  source: "GitHub 源码",
};

export const apell_copy: Record<Locale, typeof en> = { en, "zh-CN": zh };
