import Service from '@ember/service';

const languageStorageKey = 'selected_language';

const matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

function escapeRegexp(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
}

export default class LanguageDetectorService extends Service {
  getUserLanguage() {
    if (typeof localStorage !== 'undefined') {
      const language = localStorage.getItem(languageStorageKey);
      if (language) {
        return language;
      }
      return navigator.language;
    }

    return '';
  }

  saveChoice(language) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(languageStorageKey, language);
    }
  }

  isUserLanguage(language) {
    let userLang = this.getUserLanguage();
    let escapedString = escapeRegexp(userLang);
    let regexp = new RegExp(escapedString, 'i');
    return regexp.test(language);
  }
}
