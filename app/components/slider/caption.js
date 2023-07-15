import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isSuperset } from '../../util/set';

export default class SliderCaptionComponent extends Component {
  @service media;
  @service('-document') document;

  @tracked
  opacity = 1;

  @action
  setup() {
    this.slider = this.document.querySelector('.slider-parallax');
    window.addEventListener('DOMContentLoaded', () => this.fade(this), false);
  }

  isDesktop() {
    const hasMedia = new Set(this.media.matches);
    const desktopMedia = new Set(['device-xl', 'device-lg']);
    return isSuperset(desktopMedia, hasMedia);
  }

  fade(component) {
    const yScrollPosition = window.pageYOffset;

    if (component.isDesktop()) {
      const parallaxElHeight = component.slider.offsetHeight;
      const tHeaderOffset = 100;

      component.opacity =
        1 - ((yScrollPosition - tHeaderOffset) * 1.85) / parallaxElHeight;

      requestAnimationFrame(function () {
        component.fade(component);
      });
    } else {
      component.opacity = 1;
    }
  }
}
