import { formatMessage, type Locale } from "./locales";

interface SessionMessages {
  region_label: string;
  caption: string;
  sidebar_label: string;
  sidebar_heading: string;
  fallback_note: string;
  search_label: string;
  search_placeholder: string;
  filter_label: string;
  all_sources: string;
  count_one: string;
  count_many: string;
  no_threads: string;
  clear_filters: string;
  sidebar_note: string;
  conversation_label: string;
  history: string;
  user: string;
  recorded_step: string;
  conversation_note: string;
  empty_title: string;
  empty_hint: string;
}

export const session_messages: Record<Locale, SessionMessages> = {
  en: {
    region_label: "Try the session viewer with fictional conversations",
    caption: "Interactive example · sample conversations",
    sidebar_label: "Example conversations",
    sidebar_heading: "Your threads",
    fallback_note: "Three tools. One familiar place.",
    search_label: "Search example session titles and previews",
    search_placeholder: "Find a thread…",
    filter_label: "Filter example sessions by source",
    all_sources: "All",
    count_one: "{count} conversation",
    count_many: "{count} conversations",
    no_threads: "No threads found.",
    clear_filters: "Clear filters",
    sidebar_note: "A little less searching.",
    conversation_label: "{title}, example {source} conversation",
    history: "History",
    user: "You",
    recorded_step: "Recorded tool step",
    conversation_note: "The conversation, with its context.",
    empty_title: "A different word might find it.",
    empty_hint: "Try “keyboard”, “release”, or “timeline”.",
  },
  "zh-CN": {
    region_label: "通过虚构对话体验会话查看器",
    caption: "交互示例 · 虚构对话",
    sidebar_label: "示例对话",
    sidebar_heading: "你的对话",
    fallback_note: "三个工具，一个熟悉的地方。",
    search_label: "搜索示例会话的标题和摘要",
    search_placeholder: "查找对话…",
    filter_label: "按来源筛选示例会话",
    all_sources: "全部",
    count_one: "{count} 条对话",
    count_many: "{count} 条对话",
    no_threads: "未找到对话。",
    clear_filters: "清除筛选",
    sidebar_note: "少找一会儿，多做一点。",
    conversation_label: "{title}，来自 {source} 的示例对话",
    history: "历史记录",
    user: "你",
    recorded_step: "已记录的工具操作",
    conversation_note: "对话和上下文，一起保留。",
    empty_title: "换个词，或许就能找到。",
    empty_hint: "试试“键盘”“发布”或“时间线”。",
  },
};

export function formatConversationCount(locale: Locale, count: number): string {
  const messages = session_messages[locale];
  return formatMessage(count === 1 ? messages.count_one : messages.count_many, { count });
}

interface ExampleSession {
  id: string;
  source: string;
  title: string;
  preview: string;
  prompt: string;
  response: string;
  tool: string;
  output: string;
  time: string;
}

export const session_conversations: Record<Locale, ExampleSession[]> = {
  en: [
    {
      id: "keyboard",
      source: "Codex",
      title: "Review keyboard navigation",
      preview: "Give every control a clear focus state.",
      prompt: "Can you make the Orbit dashboard easier to use with a keyboard?",
      response: "The activity list now follows a predictable tab order. Each control has a visible focus state, and Escape closes the detail panel.",
      tool: "Read keyboard.ts",
      output: "Tab → next control\nShift + Tab → previous control\nEscape → close details",
      time: "Today",
    },
    {
      id: "release",
      source: "Pi",
      title: "Simplify release notes",
      preview: "Make the changes easy to scan.",
      prompt: "Help me turn these Orbit updates into a short set of release notes.",
      response: "Start with what changed for the reader: a clearer activity timeline, keyboard navigation, and a more useful detail panel. Keep one idea per bullet.",
      tool: "Read release-notes.md",
      output: "• A clearer activity timeline\n• Keyboard navigation throughout\n• Details when you need them",
      time: "Yesterday",
    },
    {
      id: "timeline",
      source: "OpenCode",
      title: "Add an activity timeline",
      preview: "Keep recent updates together.",
      prompt: "Let's add a compact activity timeline to Orbit. Keep it simple.",
      response: "The timeline groups updates by day, with a short description for each event. Selecting an event opens its details without losing your place in the list.",
      tool: "Read ActivityTimeline.tsx",
      output: "ActivityTimeline\n  DayGroup\n    ActivityItem\n    ActivityItem\n  DetailPanel",
      time: "Yesterday",
    },
  ],
  "zh-CN": [
    {
      id: "keyboard",
      source: "Codex",
      title: "检查键盘导航",
      preview: "让每个控件都有清晰的焦点状态。",
      prompt: "能让 Orbit 面板用键盘操作起来更方便吗？",
      response: "活动列表现在按清晰的顺序切换焦点。每个控件都有可见的焦点状态，按 Escape 可以关闭详情面板。",
      tool: "读取 keyboard.ts",
      output: "Tab → 下一个控件\nShift + Tab → 上一个控件\nEscape → 关闭详情",
      time: "今天",
    },
    {
      id: "release",
      source: "Pi",
      title: "精简发布说明",
      preview: "让改动一目了然。",
      prompt: "帮我把这些 Orbit 更新整理成一份简短的发布说明。",
      response: "先说读者能感受到的变化：更清晰的活动时间线、键盘导航，以及更实用的详情面板。每一条只讲一件事。",
      tool: "读取 release-notes.md",
      output: "• 更清晰的活动时间线\n• 全程支持键盘导航\n• 需要时随时查看详情",
      time: "昨天",
    },
    {
      id: "timeline",
      source: "OpenCode",
      title: "添加活动时间线",
      preview: "把最近的更新放在一起。",
      prompt: "给 Orbit 加一个紧凑的活动时间线，保持简单。",
      response: "时间线按天归类更新，每个事件都有简短说明。选择事件即可打开详情，同时保留你在列表中的位置。",
      tool: "读取 ActivityTimeline.tsx",
      output: "ActivityTimeline\n  DayGroup\n    ActivityItem\n    ActivityItem\n  DetailPanel",
      time: "昨天",
    },
  ],
};
