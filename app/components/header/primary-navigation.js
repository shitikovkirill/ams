import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import data from '../../data/portfolio';
import { service } from '@ember/service';
export default class HeaderPrimaryNavigationComponent extends Component {
  @service intl;
  @service device;

  @tracked
  open = false;

  @action toggleMenu() {
    this.open = !this.open;
  }

  get portfolio() {
    const locale = this.intl.locale[0];
    return data[locale];
  }
}
