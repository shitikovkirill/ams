import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { getOwner } from '@ember/application';
import { addClass, removeClass } from 'ember-body-class/util/bodyClass';
import { difference } from '../util/set';

export default class ApplicationRoute extends Route {
  @service intl;
  @service media;
  @service('language-detector') languageDetector;

  @tracked mediaClass;

  classNames = ['stretched', this.media.matches];

  beforeModel() {
    super.beforeModel(...arguments);
    this.media.on('mediaChanged', () => this.changeBodyClass());

    let language = 'uk-ua';
    this.intl.locales.forEach((item) => {
      if (this.languageDetector.isUserLanguage(item)) {
        language = item;
      }
    });
    this.intl.setLocale(language);
  }

  changeBodyClass() {
    const document = getOwner(this).lookup('service:-document');
    const body = document.body;
    const allClasses = new Set(Object.keys(this.media.matchers));
    const currentClasses = new Set(this.media.matches);

    if (currentClasses.size) {
      const needRemove = difference(allClasses, currentClasses);
      needRemove.forEach((classItem) => {
        removeClass(body, classItem);
      });

      currentClasses.forEach((classItem) => {
        addClass(body, classItem);
      });
    }
  }
}
