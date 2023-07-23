import Route from '@ember/routing/route';
import { service } from '@ember/service';
import data from '../data/portfolio';

export default class IndexRoute extends Route {
  @service intl;

  model() {
    const locale = this.intl.locale[0]
    return data[locale];
  }
}
