export const locales = ["en", "zh-CN"] as const;
export type Locale = typeof locales[number];

export const locale_paths: Record<Locale, string> = {
  en: "/",
  "zh-CN": "/cn/",
};

export function getLocale(value: string | null | undefined): Locale {
  return value === "zh-CN" ? "zh-CN" : "en";
}

export function formatMessage(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => String(values[key] ?? match));
}
