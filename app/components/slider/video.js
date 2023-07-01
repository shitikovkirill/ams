import Component from '@ember/component';

export default Component.extend({
    classNames: ['video-wrap'],
    didInsertElement() {
        this._super(...arguments);
        let video = this.element.children[0];
        video.muted = true;
    }
});
