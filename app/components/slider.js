import Component from '@glimmer/component';
import { service } from '@ember/service';
import { computed } from '@ember/object';

export default class SliderComponent extends Component {
    @service media;

    @computed('media.isDeviceXs', 'media.isDeviceSm')
    get showVideo() {
        return ! (this.media.isDeviceXs | this.media.isDeviceSm)
    }
}
