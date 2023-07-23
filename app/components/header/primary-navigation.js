import Component from '@glimmer/component';
import data from '../../data/portfolio'
import { service } from '@ember/service';

export default class HeaderPrimaryNavigationComponent extends Component {
    @service intl;

    get portfolio() {
        const locale = this.intl.locale[0];
        return data[locale];
    }
}
