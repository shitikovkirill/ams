import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class VideoComponent extends Component {
  @action
  muteVideo(videoElement) {
    videoElement.muted = true;
  }
}
