import { ui, defaultLang, type Language } from './index';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function removeLocaleFromPath(pathname: string): string {
  const [, maybeLang, ...rest] = pathname.split('/');
  if (maybeLang in ui) {
    return '/' + rest.join('/');
  }
  return pathname;
}

