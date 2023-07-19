import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import getStyles from '../../util/style';

export default class VideoComponent extends Component {

  @action
  muteVideo(videoElement) {
    videoElement.muted = true;
  }
}
