import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service intl;
  @service('language-detector') languageDetector;

  beforeModel() {
    super.beforeModel(...arguments);

    let language = 'uk-ua';
    this.intl.locales.forEach((item) => {
      if (this.languageDetector.isUserLanguage(item)) {
        language = item;
      }
    });
    this.intl.setLocale(language);
  }
}
