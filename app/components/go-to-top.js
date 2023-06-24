import Component from '@glimmer/component';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';

export default class GoToTopComponent extends Component {
  @tracked isShown = false;

  constructor() {
    super(...arguments);
    const document = getOwner(this).lookup('service:-document');
    document.addEventListener('scroll', () => {
      let lastKnownScrollPosition = window.scrollY;
      let browserWindowHeight = window.outerHeight;

      if (lastKnownScrollPosition > browserWindowHeight / 3) {
        this.isShown = true;
      } else {
        this.isShown = false;
      }
    });
  }
}
