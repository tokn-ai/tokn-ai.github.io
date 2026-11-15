export const terminal_sessions = [
  { id: "local", name: "orbit-web", host: "Local", service: "web", initial_tick: 42 },
  { id: "remote", name: "orbit-api", host: "Remote SSH", service: "api", initial_tick: 87 },
] as const;
