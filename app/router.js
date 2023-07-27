import EmberRouter from '@ember/routing/router';
import config from 'ams/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('portfolio', { path: '/portfolio/:portfolio_id' });
  this.route('not-found', { path: '/*path' });
  this.route('documents');
  this.route('contact');
  this.route('services');
});
