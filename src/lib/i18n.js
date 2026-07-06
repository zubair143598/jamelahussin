import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

export const locales = ["en", "ar"];

const dicts = {
  en,
  ar,
};

export function getDict(locale) {
  return dicts[locale] ?? dicts.en;
}

export function dir(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}