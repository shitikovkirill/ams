import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class SliderComponent extends Component {
  @service media;

  get showVideo() {
    return !(this.media.isDeviceXs | this.media.isDeviceSm);
  }
}
