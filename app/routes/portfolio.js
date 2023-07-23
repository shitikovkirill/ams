import Route from '@ember/routing/route';
import { service } from '@ember/service';
import data from '../data/portfolio';

export default class PortfolioRoute extends Route {
  @service intl;

  model({ portfolio_id }) {
    const locale = this.intl.locale[0]
    const item = data[locale].filter((item) => item.id == portfolio_id);
    return item[0];
  }
}
