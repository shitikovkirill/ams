import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import getStyles from '../util/style';

export default class SliderComponent extends Component {
  @service device;
  @service fastboot;
  @service('-document') document;

  @tracked
  sliderParallaxStyles;
  sliderParallaxYPos = 0;

  @tracked
  captionParallaxYPos = 0;

  @action
  setup() {
    this.slider = this.document.querySelector('#slider');
    this.headerElement = this.document.querySelector('#header');
    if (!this.fastboot.isFastBoot) {
      window.addEventListener(
        'DOMContentLoaded',
        () => this.sliderParallax(this),
        false
      );
    }
  }

  sliderParallax(component) {
    const parallaxOffsetTop = component.headerElement.offsetHeight || 0;
    const parallaxElHeight = component.slider.offsetHeight;

    const yScrollPosition = window.pageYOffset;

    if (component.device.isDesktop()) {
      if (parallaxElHeight + parallaxOffsetTop + 50 > yScrollPosition) {
        if (yScrollPosition > parallaxOffsetTop) {
          component.sliderParallaxYPos =
            (yScrollPosition - parallaxOffsetTop) / 1.5;
          component.captionParallaxYPos =
            (yScrollPosition - parallaxOffsetTop) / 7;
        } else {
          component.sliderParallaxYPos = 0;
          component.captionParallaxYPos = 0;
        }
      }

      requestAnimationFrame(function () {
        component.sliderParallax(component);
      });
    } else {
      component.sliderParallaxYPos = 0;
      component.captionParallaxYPos = 0;
    }
    component.sliderParallaxStyles = getStyles({
      transform: `translate3d(0px, ${component.sliderParallaxYPos}px, 0px)`,
    });
  }

  get showVideo() {
    return !this.device.isMobile;
  }
}
