/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { messages } from "./messages";

const LANGUAGE_STORAGE_KEY = "portfolio_language";
const I18nContext = createContext(null);

const getNestedValue = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);

const normalizeLanguage = (language) => {
  if (!language) return "es";
  if (language === "es" || language === "en") return language;
  return "es";
};

export function I18nProvider({ children }) {
  const initialLanguage =
    typeof window !== "undefined"
      ? normalizeLanguage(window.localStorage.getItem(LANGUAGE_STORAGE_KEY))
      : "es";

  const [language, setLanguageState] = useState(initialLanguage);

  const setLanguage = (nextLanguage) => {
    const normalized = normalizeLanguage(nextLanguage);
    setLanguageState(normalized);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, normalized);
    }
  };

  const t = (key, vars) => {
    const value =
      getNestedValue(messages[language], key) ??
      getNestedValue(messages.es, key) ??
      key;

    if (typeof value !== "string" || !vars) {
      return value;
    }

    return value.replace(/\{(\w+)\}/g, (_, varName) =>
      vars[varName] !== undefined ? String(vars[varName]) : ""
    );
  };

  const localize = (value) => {
    if (
      value &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      ("es" in value || "en" in value)
    ) {
      return value[language] ?? value.es ?? value.en ?? "";
    }

    return value;
  };

  const contextValue = {
    language,
    setLanguage,
    t,
    localize,
    isSpanish: language === "es",
    isEnglish: language === "en",
  };

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
