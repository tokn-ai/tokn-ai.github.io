import type { Locale } from "../i18n/locales";

export const workshop_projects = [
  {
    id: "tokn",
    name: "tokn",
    symbol: "⇄",
    scope: "model routing",
    status: "In development",
    summary: "Give compatible clients one local endpoint for provider routing, streaming, and account pools.",
    language: "Rust",
    detail: "OpenAI-compatible API",
    href: "https://github.com/tokn-ai/tokn",
  },
  {
    id: "expri",
    name: "expri",
    symbol: "⤬",
    scope: "experiment workflows",
    status: "Available",
    summary: "Run experiments locally or remotely, track metrics and artifacts, and compare results.",
    language: "Rust",
    detail: "Runs, metrics + artifacts",
    href: "https://github.com/agentic-rs/expri",
  },
  {
    id: "ffbpe",
    name: "ffbpe",
    symbol: "[·]",
    scope: "tokenization",
    status: "Available",
    summary: "Train exact byte-pair tokenizers on large multilingual corpora with bounded memory.",
    language: "Rust / Python / WASM",
    detail: "Tiktoken-compatible encoding",
    href: "https://github.com/tokn-ai/ffbpe",
  },
  {
    id: "flm-py",
    name: "flm.py",
    symbol: "⤴",
    scope: "model research",
    status: "Research preview",
    summary: "Build language-model experiments from reusable parts for data, training, reinforcement learning, and inference.",
    language: "Python / PyTorch",
    detail: "Composable model modules",
    href: "https://github.com/tokn-ai/flm.py",
  },
  {
    id: "apell",
    name: "Apell",
    symbol: "⊞",
    scope: "applet runtime",
    status: "In development",
    summary: "Run small, installable applets with shared AI services, private storage, and optional Rust/WASM backends.",
    language: "Rust / TypeScript",
    detail: "iOS · Android · macOS",
    href: "https://github.com/agentic-rs/apell",
  },
  {
    id: "doi",
    name: "doi",
    symbol: "¶",
    scope: "paper reading",
    status: "Nightly preview",
    summary: "Read arXiv papers, follow references, and save AI explanations and notes alongside the text.",
    language: "TypeScript / Rust",
    detail: "Paper Reader for Apell",
    href: "https://github.com/agentic-rs/doi",
  },
  {
    id: "llm-tokei",
    name: "llm-tokei",
    symbol: "▥",
    scope: "usage reports",
    status: "Available",
    summary: "See where your coding-agent tokens went. Turn local session records into usage and estimated cost reports.",
    language: "Rust",
    detail: "Tables + JSON",
    href: "https://github.com/agentic-rs/llm-tokei",
  },
  {
    id: "vpsctl",
    name: "vpsctl",
    symbol: "⇧",
    scope: "compute management",
    status: "In development",
    summary: "Find CPU and GPU machines, manage cloud instances across providers, and connect through ctl.",
    language: "TypeScript / Bun",
    detail: "Vultr · RunPod · Vast.ai",
    href: "https://github.com/agentic-rs/vpsctl",
  },
] as const;

type ProjectCopy = {
  scope: string;
  status: string;
  summary: string;
  detail: string;
};

type ProjectId = typeof workshop_projects[number]["id"];
type WorkshopProject = Omit<typeof workshop_projects[number], keyof ProjectCopy> & ProjectCopy;

const chinese_projects = {
  tokn: {
    scope: "模型路由",
    status: "开发中",
    summary: "为兼容客户端提供统一的本地接口，支持模型服务路由、流式响应和账号池。",
    detail: "兼容 OpenAI API",
  },
  expri: {
    scope: "实验流程",
    status: "已可用",
    summary: "在本地或远程运行实验，追踪指标与产物，并对比结果。",
    detail: "运行记录、指标与产物",
  },
  ffbpe: {
    scope: "分词",
    status: "已可用",
    summary: "在大规模多语言语料上训练精确 BPE 分词器，保持内存占用有界。",
    detail: "兼容 Tiktoken 编码",
  },
  "flm-py": {
    scope: "模型研究",
    status: "研究预览",
    summary: "使用可复用的数据、训练、强化学习与推理模块，搭建语言模型实验。",
    detail: "可组合的模型模块",
  },
  apell: {
    scope: "小程序运行时",
    status: "开发中",
    summary: "运行轻量、可安装的小程序，共享 AI 服务，使用独立存储，并可搭配 Rust/WASM 后端。",
    detail: "iOS · Android · macOS",
  },
  doi: {
    scope: "论文阅读",
    status: "每日构建预览",
    summary: "阅读 arXiv 论文，追溯参考文献，并在原文旁保存 AI 解读和笔记。",
    detail: "Apell 论文阅读小程序",
  },
  "llm-tokei": {
    scope: "用量报告",
    status: "已可用",
    summary: "了解编程智能体的 token 用在哪里。将本地会话记录转化为用量与预估费用报告。",
    detail: "表格与 JSON",
  },
  vpsctl: {
    scope: "算力管理",
    status: "开发中",
    summary: "查找 CPU 和 GPU 机器，管理不同服务商的云实例，并通过 ctl 连接。",
    detail: "Vultr · RunPod · Vast.ai",
  },
} satisfies Record<ProjectId, ProjectCopy>;

export function getWorkshopProjects(locale: Locale): readonly WorkshopProject[] {
  if (locale === "en") return workshop_projects;
  return workshop_projects.map(project => ({ ...project, ...chinese_projects[project.id] }));
}
