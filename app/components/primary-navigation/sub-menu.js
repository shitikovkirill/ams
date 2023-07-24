import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { computed } from '@ember/object';

export default class PrimaryNavigationSubMenuComponent extends Component {
    @service device;

    @tracked open = false;

    @action toggleMenu() {
        this.open = !this.open;
      }
}
