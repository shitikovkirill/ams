import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class HeaderLocaleSwitcherComponent extends Component {
    @service intl;
    
    @action switch(language) {
        console.log(language)
        this.intl.setLocale([language]);
    }
}
