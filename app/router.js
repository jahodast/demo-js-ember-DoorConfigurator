import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:task_id'});
  });
  this.route('model-groups', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:model-group_id'});
  });
  this.route('configurator', function() {
    this.route('modelselection', function() {
      this.route('model-group');
    });
  });
  this.route('door-models', function() {
    this.route('new');
    this.route('edit', {path: '/edit/:door-model_id'});
  });
  this.route('posts', function() {
    this.route('user', {path: '/user/:user_id'});
    this.route('show', {path: '/:post_id'});
  });
  this.route('user-test');
  this.route('tutorial');
});

export default Router;
